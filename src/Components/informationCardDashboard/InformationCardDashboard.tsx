import {
  StyledInformationCardDashboard,
  StyledInformationCardDashboardContainer,
} from "./style";
import course from "../../assets/cardprofessor.png";
import student from "../../assets/aluna 1.png";
import teacher from "../../assets/professor 1.png";
import { StyledSpan, StyledTag } from "../../styles/typography";
import { useContext, useEffect } from "react";
import { AlunosContext } from "../../context/AlunosContext";
import { CursosContext } from "../../context/CursosContext";
import { ProfessoresContext } from "../../context/ProfessoresContext";
import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ConfirmExclusionCard } from "../confirmExclusionCard/ConfirmExclusionCard";

interface InformationCardDashboardProps {
  type: string;
  id: string;
}

export default function InformationCardDashboard({
  type,
  id,
}: InformationCardDashboardProps) {
  const { listaAlunoById, alunoById, deleteAlunoById } =
    useContext(AlunosContext);
  const { listaCursoById, cursoById, deleteCursoById } =
    useContext(CursosContext);
  const { listaProfessorById, professorById, deleteProfessorById } =
    useContext(ProfessoresContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<Boolean>(false);

  function voltarParaRotaAnterior() {
    navigate(-1);
  }

  useEffect(() => {
    if (type == "aluno") {
      listaAlunoById(id);
    } else if (type == "curso") {
      listaCursoById(id);
    } else if (type == "professor") {
      listaProfessorById(id);
    }
    type == "curso" &&
      cursoById?.idProfessor &&
      listaProfessorById(cursoById.idProfessor.toString());
  }, []);

  function nomeProfessorById() {
    return professorById?.nome;
  }

  function removeElement() {
    type == "aluno" && deleteAlunoById(alunoById?.idAluno.toString());
    type == "professor" &&
      deleteProfessorById(professorById?.idProfessor.toString());
    type == "curso" && deleteCursoById(cursoById?.idCurso.toString());
    voltarParaRotaAnterior();
  }

  function periodoCurso(periodo: string | undefined) {
    switch (periodo?.toUpperCase()) {
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

  return (
    <>
      <StyledInformationCardDashboardContainer>
        <button onClick={voltarParaRotaAnterior} className="voltar">
          <ArrowLeft size={32} weight="thin" />
        </button>

        <StyledInformationCardDashboard>
          <img
            src={
              type == "aluno" ? student : type == "professor" ? teacher : course
            }
            alt=""
          />
          <div>
            <StyledSpan className="title-information" fontSize="lg">
              <strong>
                {type == "aluno"
                  ? "Aluno"
                  : type == "professor"
                  ? "Professor"
                  : "Curso"}
                :
              </strong>{" "}
              {type == "aluno" && (alunoById?.nome ?? "Não informado")}
              {type == "curso" && (cursoById?.nome ?? "Não informado")}
              {type == "professor" && (professorById?.nome ?? "Não informado")}
            </StyledSpan>
            <div className="information-periodCh">
              <StyledSpan className="block-span" fontSize="lg">
                <strong>
                  {type == "aluno"
                    ? "Idade"
                    : type == "professor"
                    ? "Salário"
                    : "Turno"}
                  :
                </strong>{" "}
                {type == "aluno" && (alunoById?.idade ?? "Não informado")}
                {type == "curso" &&
                  (periodoCurso(cursoById?.periodo) ?? "Não informado")}
                {type == "professor" &&
                  (professorById?.salario.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }) ??
                    "Não informado")}
              </StyledSpan>
              <StyledSpan className="block-span" fontSize="lg">
                <strong>
                  {type == "aluno"
                    ? "CPF"
                    : type == "professor"
                    ? "CPF"
                    : "Carga horária"}
                  :
                </strong>{" "}
                {type == "aluno" && (alunoById?.cpf ?? "Não informado")}
                {type == "curso" &&
                  (cursoById?.cargaHoraria ?? "Não informado")}
                {type == "professor" && (professorById?.cpf ?? "Não informado")}
              </StyledSpan>
            </div>
            {type != "professor" && (
              <StyledSpan className="professor-tag" fontSize="lg">
                <strong>{type == "aluno" ? "Email" : "Professor"}:</strong>{" "}
                {type == "aluno" && alunoById?.email}
                {type == "curso" && nomeProfessorById()}
              </StyledSpan>
            )}
            <StyledSpan className="description" fontSize="lg">
              <strong>
                {type == "aluno"
                  ? "Matrícula"
                  : type == "professor"
                  ? "Especialidade"
                  : "Descrição"}
                :
              </strong>
            </StyledSpan>
            <StyledTag className="description">
              {type == "aluno" &&
                (alunoById?.numeroDeMatricula ?? "Não informado")}
              {type == "curso" && (cursoById?.descricao ?? "Não informado")}
              {type == "professor" &&
                (professorById?.especialidade ?? "Não informado")}
            </StyledTag>
            <div className="buttons">
              <button className="editar" type="submit">
                Editar
              </button>
              <button
                className="remover"
                type="submit"
                onClick={() => setShowModal(true)}
              >
                Remover
              </button>
            </div>
          </div>
        </StyledInformationCardDashboard>
      </StyledInformationCardDashboardContainer>

      {showModal && <ConfirmExclusionCard setShowModal={setShowModal} removeConfirm={removeElement}/>}
    </>
  );
}
