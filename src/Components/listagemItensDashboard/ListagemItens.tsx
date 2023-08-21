import { Eye } from "@phosphor-icons/react";
import { StyledListagemContainer } from "./style";
import { Pagination } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CursosContext } from "../../context/CursosContext";
import { AlunosContext } from "../../context/AlunosContext";
import { ProfessoresContext } from "../../context/ProfessoresContext";
import { Link } from "react-router-dom";

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

  const [searchValue, setSearchValue] = useState("");

  function filterItems(items: any[]): any[] {
    return items.filter((item) =>
      item.nome.toLowerCase().includes(searchValue.toLowerCase())
    );
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
          {/* {isAdmin && <button>Adicionar novo</button>} */}
          <input
            type="text"
            name="search"
            id="search"
            placeholder={inputPlaceholder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
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
            let filteredItems: any[] = [];

            switch (typeItems) {
              case "aluno":
                filteredItems = filterItems(alunosData);
                break;
              case "professor":
                filteredItems = filterItems(professoresData);
                break;
              case "curso":
                const startIndex: number = currentPage * itemsPerPage;
                const endIndex: number = startIndex + itemsPerPage;
                const cursosDaPagina: any[] = cursosData.slice(
                  startIndex,
                  endIndex
                );
                filteredItems = filterItems(cursosDaPagina);
                break;
              default:
                break;
            }

            return filteredItems.length > 0 ? (
              filteredItems.map((item: any, index: number) => (
                <tr key={index}>
                  <td>
                    {item.nome ?? "Não informado"}
                    <Link
                      to={`/dashboard/${typeItems}/${
                        item.idAluno ?? item.idCurso ?? item.idProfessor
                      }`}
                    >
                      <Eye size={32} weight="thin" />
                    </Link>
                  </td>
                  <td>
                    {typeItems === "curso"
                      ? periodoCurso(item.periodo)
                      : typeItems === "professor"
                      ? item.especialidade ?? "Não informado"
                      : item.numeroDeMatricula ?? "Não informado"}
                  </td>
                </tr>
              ))
            ) : (
              <td>Nenhuma correspondência encontrada.</td>
            );
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
