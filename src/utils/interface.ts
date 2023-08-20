export interface iChildren {
  children: React.ReactNode;
}

export interface iCurso {
  nome: string;
  cargaHoraria: number;
  periodo: string;
  idProfessor: number;
  descricao: string;
  idCurso: number;
}

export interface iAluno {
  nome: string;
  idade: string;
  cpf: string;
  numeroDeMatricula: string;
  email: string;
  idAluno: number;
}

export interface iProfessor {
  nome: string,
  cpf: string,
  especialidade: string,
  salario: number,
  idProfessor: number
}