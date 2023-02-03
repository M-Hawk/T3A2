import axios from "axios"

export default axios.create({
  baseURL: "wormreads-backend-production.up.railway.app"
})