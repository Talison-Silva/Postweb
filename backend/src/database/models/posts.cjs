'use strict';

const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => 
{
  class Posts extends Model {
    
    static associate(models) {
        this.belongsTo(models.Users,{            
            foreignKey: 'userID',
            onDelete: 'CASCADE'
        })
        
    }
  }
  Posts.init({            
      description: { type: DataTypes.STRING, allowNull: false },
      content:     { type: DataTypes.STRING, allowNull: false },
      userID:      { type: DataTypes.INTEGER, allowNull: false },
      title:       { type: DataTypes.STRING, allowNull: false },
      emphasis:    { type:DataTypes.STRING, allowNull:true }
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};