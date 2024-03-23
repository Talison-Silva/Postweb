import { dirname,join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const limitador=[
    'title',
    'description',
    'content',
    'username',
    'password',
    'email',
    'me',
    'photo',
    'userID'
]

const middleware={
  'photo':(entry)=>{
      let extension,currentname,diretory;

      extension=entry.name.split('.')
      currentname=Date.now() + "." + extension[extension.length-1]

      diretory=join(__dirname,'../') + "uploads/" + currentname
      entry.mv(diretory, (err) => {
        console.log(err)
      });

      console.log(currentname,':=:',diretory,'=',currentname===diretory)

      return(currentname)
  }
}

export function exists(entry){
    let colletion={};

    Object.entries(entry).forEach((entries)=>{
        const [index,value]=entries //=====|

        if( !middleware[index] && limitador.indexOf(index)!==-1){
            colletion[index]=value
        }
        else if(middleware[index]){
            colletion[index]=middleware[index](value)
        }
        // |===============================|
    })

    return{
        ...(colletion)
    }
}

export function responseDynamic(res,msm){
    res.status(msm['status']).json(msm['data'])
}
