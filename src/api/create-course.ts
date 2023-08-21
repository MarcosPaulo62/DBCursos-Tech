import { http } from "./http"

export async function createCourse(data: CreateCourseData) {
  const token = localStorage.getItem('token');
  await http.post('/curso', data, {headers:{Authorization: token}});
}

export type CreateCourseData = {
  nome: string,
  cargaHoraria: number,
  periodo: string,
  idProfessor: number,
  descricao: string
}