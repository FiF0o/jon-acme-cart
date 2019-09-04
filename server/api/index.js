const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))

const PORT = process.env.PORT || 4000

server.get('/', (req, res) => {
  res.send({ok: true})
})

server.use('/api', router)

server.listen(PORT, () => {
  console.log(`JSON Server is running is on ${PORT}
    http://localhost:${PORT}
  `)
  console.log(`Routes:
  /api/basket`)
})