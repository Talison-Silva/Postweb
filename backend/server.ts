import http from 'http'
import server from './app.ts'

http.createServer(server).listen(3005,()=> console.log("https rodando..."))
