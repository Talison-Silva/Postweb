import Sequelize from '@/database/models/index.cjs';
import Models from '@/database/models/index.cjs';
const { sequelize } = Sequelize



export class Infra {
	models = sequelize.models
	model  = "";

	async get(filter={},associate){
		let include={};
		
		if(associate){
			include = { include: this.models[associate] }
		}

		return await Models[this.model].findAll({where:{...filter},...include});
	}



	async post(data){
		try {		
			await Models[this.model].create(data);			
		}catch  { return 500 }
		finally { return 201 }
	}



	async put(id,data){
		try {
			await Models[this.model].update(data,{where:{id:id}});			
		} catch {
			return 500
		} finally {
			return 204
		}
	}



	async delete(id){		
		try {
			await Models[this.model].destroy({where:{id:id}}); 			
		} catch {
			return 500
		} finally {
			return 204
		}
	}
}