import { createContext, useEffect, useState } from "react";
import {
  DeleteCandidate,
  GetAllCandidates,
  PostCandidate,
  PutCandidate,
} from "../../services/Api/candidate";

export const ApiContext = createContext({});

export const ApiProvider = ({ children }) => {
  const [candidates, setCandidates] = useState([]);
  const [update, setUpdate] = useState(false);

  const fuctionUpdate = () => {
    setUpdate(!update);
  };

  const FuctionModCandidate = async (form) => {
    await PutCandidate(form);
    fuctionUpdate();
  };

  const FuctionRegisterCandidate = async (form) => {
    await PostCandidate(form);
    fuctionUpdate();
  };

  const FuctionDeleteCandidate = async (idCandidate) => {
    await DeleteCandidate(idCandidate);
    fuctionUpdate();
  };

  useEffect(() => {
    const getAllCanditates = async () => {
      setCandidates(await GetAllCandidates());
    };

    getAllCanditates();
  }, [update]);

  return (
    <ApiContext.Provider
      value={{
        candidates,
        FuctionRegisterCandidate,
        FuctionDeleteCandidate,
        FuctionModCandidate,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
