console.log("The server is running...")

const express = require("express")
const serveIndex = require("serve-index")

const app = express()
const port = 3000

const publicDir = "."

app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

app.use(express.static(publicDir))
app.use(serveIndex(publicDir, { icons: true }))

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
