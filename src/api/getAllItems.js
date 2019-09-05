import axios from 'axios'
const {REACT_APP_API, REACT_APP_API_PORT} = process.env

const BASE_API = `${REACT_APP_API}:${REACT_APP_API_PORT}/api/`


export default async () => {
  try {
    const response = await axios.get(`${BASE_API}basket`)
    return response.data
  } catch(e) {
    // TODO catch error with action later
    console.error(e)
  }
}