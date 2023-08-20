import { Eye } from "@phosphor-icons/react";
import { StyledListagemContainer } from "./style";
import { Pagination } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CursosContext } from "../../context/CursosContext";
import { AlunosContext } from "../../context/AlunosContext";
import { ProfessoresContext } from "../../context/ProfessoresContext";

interface ListagemItensProps {
  isAdmin: Boolean;
  typeItems: string;
}

export default function ListagemItens({
  isAdmin,
  typeItems,
}: ListagemItensProps) {
  const [currentPage, setPage] = useState(0);
  const itemsPerPage = 10;

  const { alunosData, listaAlunos, totalPaginasAluno, listaAlunosPagination } =
    useContext(AlunosContext);

  useEffect(() => {
    listaAlunosPagination(currentPage, 10);
  }, [currentPage]);

  const {
    professoresData,
    listaProfessores,
    totalPaginasProf,
    listaProfessoresPagination,
  } = useContext(ProfessoresContext);

  useEffect(() => {
    listaProfessoresPagination(currentPage, 10);
  }, [currentPage]);

  const { cursosData, listaCursos } = useContext(CursosContext);

  const totalPagesCursos = Math.ceil(cursosData.length / 10);

  useEffect(() => {
    listaCursos();
  }, []);

  function handleSetPage(_: any, newPage: number) {
    setPage(newPage - 1);
  }

  function periodoCurso(periodo: string) {
    switch (periodo.toUpperCase()) {
      case "MANHÃ":
        return "Manhã";
      case "MANHA":
        return "Manhã";
      case "TARDE":
        return "Tarde";
      case "NOITE":
        return "Noite";
      default:
        return "Não informado";
    }
  }

  let headerTitle = "";
  let inputPlaceholder = "";
  let firstHeaderTable = "";
  let secondHeaderTable = "";

  switch (typeItems) {
    case "aluno":
      headerTitle = "Alunos";
      inputPlaceholder = "Pesquise por um aluno...";
      firstHeaderTable = "Nome";
      secondHeaderTable = "Matrícula";
      break;
    case "professor":
      headerTitle = "Professores";
      inputPlaceholder = "Pesquise por um professor...";
      firstHeaderTable = "Nome";
      secondHeaderTable = "Especialidade";
      break;
    case "curso":
      headerTitle = "Cursos";
      inputPlaceholder = "Pesquise por um curso...";
      firstHeaderTable = "Curso";
      secondHeaderTable = "Período";
      break;
  }

  return (
    <StyledListagemContainer>
      <div className="header">
        <h2>{headerTitle}</h2>
        <div>
          {isAdmin && <button>Adicionar novo</button>}
          <input
            type="text"
            name="search"
            id="search"
            placeholder={inputPlaceholder}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>{firstHeaderTable}</th>
            <th>{secondHeaderTable}</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            switch (typeItems) {
              case "aluno":
                return alunosData.map((aluno, index) => (
                  <tr key={index}>
                    <td>
                      {aluno.nome ?? "Não informado"}
                      <Eye size={32} weight="thin" />
                    </td>
                    <td>{aluno.numeroDeMatricula ?? "Não informado"}</td>
                  </tr>
                ));
              case "professor":
                return professoresData.map((professor, index) => (
                  <tr key={index}>
                    <td>
                      {professor.nome ?? "Não informado"}
                      <Eye size={32} weight="thin" />
                    </td>
                    <td>{professor.especialidade ?? "Não informado"}</td>
                  </tr>
                ));
              case "curso":
                const startIndex = currentPage * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;

                const cursosDaPagina = cursosData.slice(startIndex, endIndex);

                return cursosDaPagina.map((curso, index) => (
                  <tr key={index}>
                    <td>
                      {curso.nome ?? "Não informado"}
                      <Eye size={32} weight="thin" />
                    </td>
                    <td>{periodoCurso(curso.periodo)}</td>
                  </tr>
                ));
              default:
                return null;
            }
          })()}
        </tbody>
      </table>

      {typeItems == "aluno" ? (
        <Pagination
          count={totalPaginasAluno}
          onChange={handleSetPage}
          color="primary"
        />
      ) : typeItems == "professor" ? (
        <Pagination
          count={totalPaginasProf}
          onChange={handleSetPage}
          color="primary"
        />
      ) : (
        <Pagination
          count={totalPagesCursos}
          onChange={handleSetPage}
          color="primary"
        />
      )}
    </StyledListagemContainer>
  );
}
