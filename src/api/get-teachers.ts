import { Teacher } from "../model";
import { http } from "./http"

export async function getTeachers() {
  const token = localStorage.getItem('token')

  const response = await http.get<GetTeachersResponse>('/professor', {
    headers: {
      Authorization: token
    }
  })

  return response.data;
}

type GetTeachersResponse = Array<Teacher>