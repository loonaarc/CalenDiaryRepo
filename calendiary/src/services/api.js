import axios from 'axios'

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:8081/api', // Spring Boot runs on 8081
})

export default api
