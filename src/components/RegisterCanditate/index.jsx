import { Button, Stack } from "@mui/material";
import { UseForm } from "../../hooks/UseForm";
import { InputForms } from "./styled";
import { useContext } from "react";
import { ApiContext } from "../../context/Api";

export const RegisterCandidate = () => {
  const { formValues, onChange, cleanFields } = UseForm({
    nomeCandidato: "",
    cpf: "",
    telefone: "",
    nota01: "",
    nota02: "",
    nota03: "",
  });
  const { FuctionRegisterCandidate } = useContext(ApiContext);

  const SubmitForm = async (event) => {
    event.preventDefault();
    await FuctionRegisterCandidate(formValues);
    cleanFields();
  };

  return (
    <form onSubmit={SubmitForm}>
      <Stack
        height={80}
        sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
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
        />
        <InputForms
          type={"number"}
          placeholder="Nota 1"
          name="nota01"
          onChange={onChange}
          required
          min={0}
          max={10}
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
