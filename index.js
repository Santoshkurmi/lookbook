import http from "http"


const server = http.createServer((req, res) => {
  res.write("HEllo")
  res.write("Hello world")
  res.write("This is the world")
  res.end()
  console.log("Hello baby")
})

server.listen(5000, () => console.log("Server is listening on port 5000"))


