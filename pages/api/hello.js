// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"

  const route = "http://127.0.0.1:8000/api"

  export const http = axios.create({
    baseURL:"http://127.0.0.1:8000/api",
  })