import { createContext, useContext, useEffect, useState } from "react";
import { ApiContext } from "../Api";

export const FunctionsContext = createContext({});

export const FunctionsProvider = ({ children }) => {
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [idCandidate, setIdCandidate] = useState(false);
  const { candidates } = useContext(ApiContext);
  const [infoCandidate, setInfoCandidate] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const functionSetCandidate = async () => {
    const resultados = candidates.filter((objeto) => {
      return objeto.codCandidato === idCandidate;
    });
    setInfoCandidate(resultados[0]);
  };

  const fuctionModalEditOpen = (id) => {
    setModalEditOpen(!modalEditOpen);
    if (id) {
      setIdCandidate(id);
    }
  };

  const fuctionModalDeleteOpen = (id) => {
    setModalDeleteOpen(!modalDeleteOpen);
    if (id) {
      setIdCandidate(id);
    }
  };

  useEffect(() => {
    functionSetCandidate();
  }, [functionSetCandidate, idCandidate]);

  return (
    <FunctionsContext.Provider
      value={{
        fuctionModalEditOpen,
        fuctionModalDeleteOpen,
        idCandidate,
        modalEditOpen,
        modalDeleteOpen,
        infoCandidate,
      }}
    >
      {children}
    </FunctionsContext.Provider>
  );
};
