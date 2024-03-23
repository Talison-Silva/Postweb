import {Sequelize} from 'sequelize';

export async function starting(){
    var sequelize=new Sequelize('postweb','root','talison2005',{
        host:'127.0.0.1',
        dialect:'mariadb'
    })
    
    try{
        await sequelize.authenticate()
        console.log('mariadb::connection:=>: sucess')
    }catch(err){
        console.log('mariadb::connection:=>: error:',err)
    }
    
    finally{
        return(sequelize)
    }
}