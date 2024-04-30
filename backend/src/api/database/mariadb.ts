import { mariadbConfig } from '@/config/sequelize-mariadb.ts';
import ClientSequelize from '@/api/ORMs/sequelize.ts'
import { Sequelize } from 'sequelize';

ClientSequelize.init();


export class MariaDB{
	model="";

	async get(filter={},associate){
		let include={};

		if(associate)
		{
			include={include:ClientSequelize.models[associate]}
		}

		return await ClientSequelize.models[this.model].findAll({where:{...filter},...include});
	}

	async post(data){
		try
		{
			await ClientSequelize.models[this.model].create(data);			
		}
		catch
		{
			return 500
		}
		finally
		{
			return 201
		}
	}

	async put(id,data){
		try
		{
			await ClientSequelize.models[this.model].update(data,{where:{id:id}});			
		}
		catch
		{
			return 500
		}
		finally
		{
			return 204
		}
	}

	async delete(id){		
		try
		{
			await ClientSequelize.models[this.model].destroy({where:{id:id}}); 			
		}
		catch
		{
			return 500
		}
		finally
		{
			return 204
		}
	}
}