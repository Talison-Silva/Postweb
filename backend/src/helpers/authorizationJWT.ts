import jwt from 'jsonwebtoken';

const call_err=(name)=>
{
    switch(name){
        case "TokenExpiredError":
            return 401
            break
        default:
            return 500
    }
}

export const authorizationJWT=(proceed,token)=>
{
    const RUN=async(err,decode) => err?call_err(err.name):proceed(decode);
    //
    return jwt.verify(token,process.env.SECRET,RUN)
}