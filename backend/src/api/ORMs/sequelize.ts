import { mariadbConfig } from '@/config/sequelize-mariadb.ts';
import { PostsModel } from '@/api/models/posts/index.ts';
import { UsersModel } from '@/api/models/users/index.ts';
import Models from '@/api/models/index.ts';
import { Sequelize } from 'sequelize';

class SequelizeORM{
	models=Models;

	async init()
	{		
		try
		{			
			var instance=new Sequelize(mariadbConfig)
			this.ModelsInit(instance)	
			//await instance.sync()
		    await instance.authenticate()

		    console.log('\x1b[34m[+] ~. mariadb connect\x1b[0m');
		}
		catch(err)
		{
			console.error('\x1b[33m[-] mariadb ~.\n',err,'\n [-] . . . . . . . . . . . \x1b[0m')
		}		
	}

	async ModelsInit(instance:any):void{
		
		await this.models.Posts.init(instance)
		await this.models.Users.init(instance)
		// associate
		await this.models.Posts.associate(this.models.Users)
		await this.models.Users.associate(this.models.Posts)		
	}
}

export default new SequelizeORM();