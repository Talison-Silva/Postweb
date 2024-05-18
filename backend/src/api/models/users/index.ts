import {Model,DataTypes} from 'sequelize';

class UsersModel extends Model{

    static init(sequelize){      
        super.init(
        {
            photo:{
                type:DataTypes.STRING,
                allowNull:true
            },
            me:{
                type:DataTypes.STRING(2000),
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