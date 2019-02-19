import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(null, function(error) {
  return Promise.reject(error)
})

export const getNotes = () => instance.get('/notes')

export const updateNote = (id, note) => instance.put(`/notes/${id}`, note)

export const deleteNote = id => instance.delete(`/delete/${id}`)
