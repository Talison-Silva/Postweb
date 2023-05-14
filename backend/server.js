import fs from 'fs'
import https from 'https'
import server from './app.js'

https.createServer({
	cert: fs.readFileSync('./src/ssl/code.crt'),
	key: fs.readFileSync('./src/ssl/code.key')
},server).listen(3005,()=> console.log("https rodando..."))