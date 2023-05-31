import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

export const GetAllCandidates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/candidatos`);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const PostCandidate = async (candidate) => {
  const data = {};
  const headers = {
    headers: {
      nomeCandidato: candidate.nomeCandidato,
      cpf: candidate.cpf,
      telefone: candidate.telefone,
      nota01: candidate.nota01,
      nota02: candidate.nota02,
      nota03: candidate.nota03,
    },
  };
  try {
    await axios.post(`${BASE_URL}/candidatos`, data, headers);
    alert("Candidato cadastrado");
  } catch (error) {
    alert(error.response.data.message);
  }
};
export const DeleteCandidate = async (idCandidate) => {
  try {
    await axios.delete(`${BASE_URL}/candidatos`, {
      headers: {
        codCandidato: idCandidate,
      },
    });

    alert("Usuario deletado");
  } catch (error) {
    alert(error.response.data.message);
  }
};
export const PutCandidate = async (candidate) => {
  const data = {};
  const headers = {
    headers: {
      codCandidato: candidate.initialState.codCandidato,
      nomeCandidato:
        candidate.nomeCandidato || candidate.initialState.nomeCandidato,
      cpf: candidate.cpf || candidate.initialState.cpf,
      telefone: candidate.telefone || candidate.initialState.telefone,
      nota01: candidate.nota01 || candidate.initialState.nota01,
      nota02: candidate.nota02 || candidate.initialState.nota02,
      nota03: candidate.nota03 || candidate.initialState.nota03,
    },
  };

  try {
    await axios.put(`${BASE_URL}/candidatos`, data, headers);
    alert("Informação do Candidato mudado com sucesso!");
  } catch (error) {
    alert(error.response.data.message);
  }
};
