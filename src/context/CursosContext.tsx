import { createContext, useState } from "react";
import { iChildren, iCurso } from "../utils/interface";

interface iCursoContext {
  cursosData: iCurso[];
  listaCursos: () => void;
  listaCursoById: (id: string) => void;
  cursoById: iCurso | undefined;
}

export const CursosContext = createContext({} as iCursoContext);

export function CursosProvider({ children }: iChildren) {
  const [cursosData, setCursosData] = useState<iCurso[] | []>([]);
  const [cursoById, setCursoById] = useState<iCurso | undefined>();

  const apiKey =
    "http://vemser-hml.dbccompany.com.br:39000/leticiasantosgonc/vemser-tf-3-03-springsecurity";

  async function listaCursos() {
    const response = await fetch(`${apiKey}/curso`, {
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

    setCursosData(resposta);
  }

  async function listaCursoById(id: string) {
    const response = await fetch(`${apiKey}/curso/${id}`, {
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

    setCursoById(resposta);
  }

  return (
    <CursosContext.Provider
      value={{ cursosData, listaCursos, listaCursoById, cursoById }}
    >
      {children}
    </CursosContext.Provider>
  );
}
