const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))

// required to enable CORS
const REACT_APP_PORT = process.env.REACT_APP_PORT || 3000
const REACT_APP_WEB = process.env.REACT_APP_WEB || 'http://localhost'

const REACT_APP_API_PORT = process.env.REACT_APP_API_PORT || 4000


const APP_URL = `${REACT_APP_WEB}:${REACT_APP_PORT}`

server.get('/', (req, res) => {
  res.send({ok: true})
})

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", `${APP_URL}`);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
server.use('/api', router)

server.listen(REACT_APP_API_PORT, () => {
  console.log(`JSON Server is running is on ${REACT_APP_API_PORT}
    http://localhost:${REACT_APP_API_PORT}
  `)
  console.log(`Routes:
  /api/basketNormal
  `)
})