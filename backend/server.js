import http from 'http'
import server from './app.js'

http.createServer(server).listen(3005,()=> console.log("https rodando..."))
