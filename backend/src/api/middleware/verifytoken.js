export default function verifyToken(req,res,next){
    if(req.headers["authorization"]){

        const tokenbearer=(req.headers["authorization"]).split(" ")
        if(tokenbearer[1]!=="null"){
            req.token=tokenbearer[1]
            next()
        } else { res.status(401).send([{}]) }

    } else { res.status(500).send({data:[]}) }
}
