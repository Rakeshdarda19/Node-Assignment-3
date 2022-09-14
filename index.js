const fs = require("fs")
const http = require("http")

const server = http.createServer();

server.on("request", (req,res) => {
    const rstream = fs.createReadStream("index.html","utf-8")

    
    rstream.on("data", (chunkdata) => {
        res.write(chunkdata)
    })
    
    rstream.on("end",() => {
        res.end()
    })

    // error event

    rstream.on("error", () => {
        res.end("FIle not found")
    })
    
  // rstream.pipe(res) 

})
server.listen(5000, () => console.log("Server started at 5000"));
