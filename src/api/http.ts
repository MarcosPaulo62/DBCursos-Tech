import axios from 'axios'
import { API_KEY } from '../utils/API'

export const http = axios.create({
  baseURL: API_KEY
})