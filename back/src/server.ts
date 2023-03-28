console.log("The server is running...")

import express from "express"
import serveIndex from "serve-index"
import api from "./api"

const app = express()
const port = 3000

const publicDir = "."

app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

app.use("/api", api)

app.use(express.static(publicDir))
app.use(serveIndex(publicDir, { icons: true }))

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
