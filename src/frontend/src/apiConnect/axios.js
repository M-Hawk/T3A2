import axios from "axios"

export default axios.create({
  baseURL: "https://wormreads-backend-production.up.railway.app/"
  // baseURL: "http://localhost:5000"
})

