import { Eye } from "@phosphor-icons/react";
import { StyledListagemContainer } from "./style";
import { Pagination } from "@mui/material";

interface ListagemItensProps {
  isAdmin: Boolean;
  typeItems: string;
}

export default function ListagemItens({
  isAdmin,
  typeItems,
}: ListagemItensProps) {
  const arrayAlunos = [
    { nome: "Gustavo Guanabara", matricula: "48654765" },
    { nome: "Vitor Nunes", matricula: "4657421" },
    { nome: "Valéria Almeida", matricula: "445545" },
    { nome: "Felipe Deschamps", matricula: "854654" },
    { nome: "Micael Mota", matricula: "854111111" },
  ];
  const arrayCursos = [
    { nome: "Python avançado", periodo: "Manhã" },
    { nome: "MySQL", periodo: "Manhã" },
    { nome: "React Redux", periodo: "Noite" },
    { nome: "Node.js", periodo: "Tarde" },
    { nome: "Java + Spring ", periodo: "Noite" },
  ];
  const arrayProfessores = [
    { nome: "Gustavo Guanabara", especialidade: "Matemática" },
    { nome: "Vitor Nunes", especialidade: "Geoprocessamento" },
    { nome: "Valéria Almeida", especialidade: "Português e Literatura" },
    { nome: "Felipe Deschamps", especialidade: "DevOps" },
    { nome: "Micael Mota", especialidade: "Agile" },
  ];

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
                return arrayAlunos.map((item) => (
                  <tr key={item.matricula}>
                    <td>
                      {item.nome}
                      <Eye size={32} weight="thin" />
                    </td>
                    <td>{item.matricula}</td>
                  </tr>
                ));
              case "professor":
                return arrayProfessores.map((item) => (
                  <tr key={item.nome}>
                    <td>
                      {item.nome}
                      <Eye size={32} weight="thin" />
                    </td>
                    <td>{item.especialidade}</td>
                  </tr>
                ));
              case "curso":
                return arrayCursos.map((item) => (
                  <tr key={item.nome}>
                    <td>
                      {item.nome}
                      <Eye size={32} weight="thin" />
                    </td>
                    <td>{item.periodo}</td>
                  </tr>
                ));
              default:
                return null;
            }
          })()}
        </tbody>
      </table>

      <Pagination count={10} color="secondary" />
    </StyledListagemContainer>
  );
}
