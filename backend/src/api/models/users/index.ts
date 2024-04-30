import { mariadbConfig } from '@/config/sequelize-mariadb.ts';
import { PostsModel } from '@/api/models/posts/index.ts';
import {Model,DataTypes,Sequelize} from 'sequelize';

//const sequelize = new Sequelize(mariadbConfig);

class UsersModel extends Model{

    static init(sequelize){      
        super.init(
        {
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
        },
        {
            sequelize,
            modelName: 'Users'
        });        
    }

    static associate(model){
        super.hasMany(model);
    }
}


/*
UsersModel.init(
    {
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
    },
    {
        sequelize,
        modelName: 'Users',
    }
);
*/


//UsersModel.sync({})

export {UsersModel};