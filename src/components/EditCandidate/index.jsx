import { Button, Stack } from "@mui/material";
import { UseForm } from "../../hooks/UseForm";
import { InputForms } from "./styled";
import { useContext } from "react";
import { ApiContext } from "../../context/Api";
import { FunctionsContext } from "../../context/Functions";

export const EditCandidate = ({ candidateEdit }) => {
  const { infoCandidate } = useContext(FunctionsContext);
  const { formValues, onChange } = UseForm({
    codCandidato: infoCandidate.codCandidato,
    nomeCandidato: infoCandidate.nomeCandidato,
    cpf: infoCandidate.cpf,
    telefone: infoCandidate.telefone,
    nota01: infoCandidate.Notas[0].nota01,
    nota02: infoCandidate.Notas[0].nota02,
    nota03: infoCandidate.Notas[0].nota03,
  });
  const { FuctionModCandidate } = useContext(ApiContext);

  const SubmitForm = async (event) => {
    event.preventDefault();
    FuctionModCandidate(formValues);
  };

  return (
    <form onSubmit={SubmitForm}>
      <Stack
        width={300}
        height={80}
        sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop={20}
        padding={2}
        spacing={4}
      >
        <InputForms
          type={"text"}
          placeholder="Candidato"
          name="nomeCandidato"
          onChange={onChange}
          required
          pattern="[a-zA-ZÀ-ÿ -]{3,30}"
          title="mínimo de 3 caracteres e menor que 30"
          value={formValues.nomeCandidato}
          defaultValue={infoCandidate.nomeCandidato}
        />
        <InputForms
          type={"text"}
          placeholder="CPF"
          name="cpf"
          onChange={onChange}
          required
          pattern="[0-9]{11}"
          title="Deve conter 11 dígitos numéricos ex: XXXXXXXXXYY"
          value={formValues.cpf}
          defaultValue={infoCandidate.cpf}
        />
        <InputForms
          type={"text"}
          placeholder="Telefone"
          name="telefone"
          onChange={onChange}
          required
          pattern="[0-9]{11}"
          title="Deve conter 11 dígitos numéricos parecido ex: 28999287132"
          value={formValues.telefone}
          defaultValue={infoCandidate.telefone}
        />
        <InputForms
          type={"number"}
          placeholder="Nota 1"
          name="nota01"
          onChange={onChange}
          min={0}
          max={10}
          defaultValue={infoCandidate.Notas[0].nota01}
          value={formValues.nota01}
        />
        <InputForms
          type={"number"}
          placeholder="Nota 2"
          name="nota02"
          onChange={onChange}
          required
          min={0}
          max={10}
          defaultValue={infoCandidate.Notas[0].nota02}
          value={formValues.nota02}
        />
        <InputForms
          type={"number"}
          placeholder="Nota 3"
          name="nota03"
          onChange={onChange}
          required
          min={0}
          max={10}
          defaultValue={infoCandidate.Notas[0].nota03}
          value={formValues.nota03}
        />
        <Button
          variant="text"
          type="submit"
          onClick={() => {
            SubmitForm();
          }}
          sx={{
            borderRadius: "100%",
            fontSize: 28,
            fontWeight: 500,
            backgroundColor: "#383838",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#000",
            },
          }}
        >
          +
        </Button>
      </Stack>
    </form>
  );
};
