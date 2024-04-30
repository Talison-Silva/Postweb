import { mariadbConfig } from '@/config/sequelize-mariadb.ts';
import { UsersModel } from '@/api/models/users/index.ts';
import {Model,DataTypes,Sequelize} from 'sequelize';

class PostsModel extends Model{

    static init(sequelize)
    {        
        super.init(
        {
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
            },
            emphasis:{
                type:DataTypes.STRING,
                allowNull:true
            }
        },
        {
            sequelize,
            modelName: 'Posts'
        });        
    }

    static associate(model){
        super.belongsTo(model,{
            foreignKey: 'userID',
            onDelete: 'cascade',
            hooks: true
        })        
    }
}


export {PostsModel};