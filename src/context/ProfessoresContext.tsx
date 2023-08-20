import { createContext, useState } from "react";
import { iChildren, iProfessor } from "../utils/interface";

interface iProfessorContext {
  professoresData: iProfessor[];
  listaProfessores: () => void;
  totalPaginasProf: number;
  listaProfessoresPagination: (page: number, pageSize: number) => void;
}

export const ProfessoresContext = createContext({} as iProfessorContext);

export function ProfessoresProvider({ children }: iChildren) {
  const [professoresData, setProfessoresData] = useState<iProfessor[] | []>([]);
  const [totalPaginasProf, setTotalPaginasProf] = useState<number>(0);

  const apiKey =
    "http://vemser-hml.dbccompany.com.br:39000/leticiasantosgonc/vemser-tf-3-03-springsecurity";

  async function listaProfessores() {
    const response = await fetch(`${apiKey}/professor`, {
      headers: {
        "Content-type": "aplication/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      console.log("Erro ao fazer requisição!");
      return;
    }

    const resposta = await response.json();

    setProfessoresData(resposta);
  }

  const listaProfessoresPagination = async (page: number, pageSize: number) => {
    try {
      const response = await fetch(
        `${apiKey}/professor/paginado?numeroDePaginas=${page}&quantidadeDeRegistros=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      const resposta = await response.json();
      if (response.ok) {
        setProfessoresData(resposta.content);
        setTotalPaginasProf(resposta.totalPages);
      }
    } catch (error) {
      console.log("Desculpe, ocorreu um erro inesperado.");
    }
  };

  return (
    <ProfessoresContext.Provider value={{ professoresData, listaProfessores, totalPaginasProf, listaProfessoresPagination }}>
      {children}
    </ProfessoresContext.Provider>
  );
}
