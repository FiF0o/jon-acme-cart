const {REACT_APP_API, REACT_APP_API_PORT} = process.env

const BASE_API = `${REACT_APP_API}:${REACT_APP_API_PORT}/api/`

export default function getAllItems() {
  return fetch(`${BASE_API}basket`)
    .then(data => data.json())
}