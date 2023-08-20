import { createContext, useState } from "react";
import { iChildren, iCurso } from "../utils/interface";

interface iCursoContext{
    cursosData: iCurso[];
    listaCursos: () => void;
}

export const CursosContext = createContext({} as iCursoContext);

export function CursosProvider({ children }: iChildren){
    const [cursosData, setCursosData] = useState<iCurso[] | []>([]);

    const apiKey = 'http://vemser-hml.dbccompany.com.br:39000/leticiasantosgonc/vemser-tf-3-03-springsecurity';

    async function listaCursos() {
        const response = await fetch(
            `${apiKey}/curso`,
            {
                headers: {
                    "Content-type": "aplication/json",
                    "Authorization": `${localStorage.getItem("token")}`
                }
            }
        );
        if (!response.ok) {
            console.log("Erro ao fazer requisição!");
            return;
        }

        const resposta = await response.json();

        setCursosData(resposta);
    }

    return(
        <CursosContext.Provider value={{ cursosData, listaCursos }}>
            {children}
        </CursosContext.Provider>
    )
}