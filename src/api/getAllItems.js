import axios from 'axios'
const REACT_APP_API_PORT = process.env.REACT_APP_API_PORT || 4000
const REACT_APP_API = process.env.REACT_APP_API || 'http://localhost'

const BASE_API = `${REACT_APP_API}:${REACT_APP_API_PORT}/api/`


export default async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_API}basket${endpoint}`)
    return response.data
  } catch(e) {
    // TODO catch error with action later
    console.error(e)
  }
}