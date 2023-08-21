import { http } from "./http"

export async function createTeacher(data: CreateTeacherData) {
  const token = localStorage.getItem('token');
  await http.post('/professor', data, {headers:{Authorization: token}});
}

export type CreateTeacherData = {
  nome: string,
  salario: number,
  especialidade: string,
  cpf: number
}