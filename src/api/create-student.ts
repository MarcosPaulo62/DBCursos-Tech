import {http} from "./http"

export async function createStudent (data: CreateStudentData){
  const token = localStorage.getItem('token');
  await http.post('/aluno', data, {headers:{Authorization: token}});
}

export type CreateStudentData = {
  nome: string,
  cpf: string,
  numeroDeMatricula: string,
  email: string,
  idade: string,
}