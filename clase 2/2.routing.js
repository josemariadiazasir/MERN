const http = require("node:http")

const dittoJSON = require("./pokemon/ditto.json")
const server = http.createServer((req,res)=>{
    const {method, url} = req

    switch(method){
        case "GET":
            switch(url){
                case "/pokemon/ditto":
                    res.setHeader("Content-Type", "application/json; charset=utf-8")
                    return res.end(JSON.stringify(dittoJSON))
                default:
                    res.statusCode = 404
                    res.setHeader("Content-Type", "text/html; charset=utf-8")
                    return res.end("<h1>404</h1>")
            }
        case "POST":
            switch(url){
                case "/pokemon":
                    let body = ""
                    req.on("data", chunk =>{
                        body+=chunk.toString()
                    })
                    req.on("end",()=>{
                        const data = JSON.parse(body)

                        res.writeHead(201, {"Content-Type": "application/json; charset=utf-8"})
                        res.end(JSON.stringify(data))
                    })
                    break;
            }
            break;
        default:
            res.statusCode=404
            res.setHeader("Content-Type", "text/html; charset=utf-8")
            return res.end("<h1>404</h1>")
    }
})
const defaultPort = 3000
server.listen(defaultPort,()=>{
    console.log(`http://localhost:${defaultPort}`)
})