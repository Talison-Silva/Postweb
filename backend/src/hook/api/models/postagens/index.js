import {Sequelize, Model, DataTypes} from 'sequelize';

export default class ModelPostagens{
    constructor(sequelize){
        this.exe(sequelize)
    }

    async exe(sequelize){
        this.postagens = await this.model(sequelize);
        //await sequelize.sync( { force: true })
    }

    async model(sequelize){
        return await sequelize.define('Postagens',{
            userID:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            title:{
                type: DataTypes.STRING,
                allowNull: false
            },
            description:{
                type: DataTypes.STRING,
                allowNull: false
            },
            content:{
                type: DataTypes.STRING,
                allowNull: false
            }
        })
    }
}
