import {Model,DataTypes} from 'sequelize';

class UsersModel extends Model{

    static init(sequelize){      
        super.init(
        {
            photo:{
                type:DataTypes.STRING,
                allowNull:true
            },
            biography:{
                type:DataTypes.STRING(2000),
                allowNull:true
            },
            birthdate:{
                type: DataTypes.STRING,
                allowNull: false
            },
            phone:{
                type: DataTypes.STRING,
                allowNull: false
            },
            gender:{
                type: DataTypes.STRING,
                allowNull: false
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