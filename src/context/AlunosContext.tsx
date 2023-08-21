import { createContext, useState } from "react";
import { iChildren, iAluno } from "../utils/interface";

interface iAlunoContext {
  alunosData: iAluno[];
  listaAlunos: () => void;
  totalPaginasAluno: number;
  listaAlunosPagination: (page: number, pageSize: number) => void;
  listaAlunoById: (id: string) => void;
  alunoById: iAluno | undefined;
  deleteAlunoById: (id: string | undefined) => void;
}

export const AlunosContext = createContext({} as iAlunoContext);

export function AlunosProvider({ children }: iChildren) {
  const [alunosData, setAlunosData] = useState<iAluno[] | []>([]);
  const [totalPaginasAluno, setTotalPaginasAluno] = useState<number>(0);
  const [alunoById, setAlunoById] = useState<iAluno | undefined>();

  const apiKey =
    "http://vemser-hml.dbccompany.com.br:39000/leticiasantosgonc/vemser-tf-3-03-springsecurity";

  async function listaAlunos() {
    const response = await fetch(`${apiKey}/aluno`, {
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

    setAlunosData(resposta);
  }

  const listaAlunosPagination = async (page: number, pageSize: number) => {
    try {
      const response = await fetch(
        `${apiKey}/aluno/paginado?numeroDePaginas=${page}&quantidadeDeRegistros=${pageSize}`,
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
        setAlunosData(resposta.content);
        setTotalPaginasAluno(resposta.totalPages);
      }
    } catch (error) {
      console.log("Desculpe, ocorreu um erro inesperado.");
    }
  };

  async function listaAlunoById(id: string) {
    const response = await fetch(`${apiKey}/aluno/${id}`, {
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

    setAlunoById(resposta);
  }

  async function deleteAlunoById(id: string | undefined) {
    const response = await fetch(`${apiKey}/aluno/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "aplication/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      console.log("Erro ao fazer requisição!");
      return;
    }
  }

  return (
    <AlunosContext.Provider
      value={{
        alunosData,
        listaAlunos,
        totalPaginasAluno,
        listaAlunosPagination,
        listaAlunoById,
        alunoById,
        deleteAlunoById,
      }}
    >
      {children}
    </AlunosContext.Provider>
  );
}
