import {Model,DataTypes} from 'sequelize';

class PostsModel extends Model{

    static init(sequelize:any):void
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

    static associate(model:any):void{
        console.log('posts ~ associate')
        super.belongsTo(model,{
            foreignKey: 'userID',
            onDelete: 'cascade',
            hooks: true
        })
    }
}


export {PostsModel};