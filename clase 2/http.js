const http = require("node:http")


const server = http.createServer((req,res)=>{
        res.setHeader("Content-Type","text/html; charset=utf-8")

    if(req.url === "/"){
        res.statusCode=200
        res.end("mi  a página")
    }else if(req.url === "/contacto"){
        res.statusCode=200
        res.end("<h1>contacto</h1><p>soy un párrafo</p>")
    }else {
        res.statusCode=404
        res.end("<h1>pagina no encontrada</h1>")
    }


})
const defaultPort = 3000
server.listen(defaultPort,()=>{
    console.log(`http://localhost:${defaultPort}`)
})