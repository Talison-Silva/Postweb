import {Sequelize, Model, DataTypes} from 'sequelize';

export default class ModelUsers{
    constructor(sequelize){
        this.exe(sequelize)
    }

    async exe(sequelize){
        this.users = await this.model(sequelize);
        //await sequelize.sync( { force: true })
    }

    async model(sequelize){
        return await sequelize.define('Users',{
            photo:{
                type:DataTypes.STRING,
                allowNull:true
            },
            me:{
                type:DataTypes.STRING,
                allowNull:true
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false
            },
            password:{
                type: DataTypes.STRING,
                allowNull: false
            },
            username:{
                type: DataTypes.STRING,
                allowNull: false
            }
        })
    }
}
