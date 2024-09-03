'use strict';

const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => 
{
  class Users extends Model {
    
    static associate(models) {
        this.hasMany(models.Posts);
    }
  }

  Users.init({
      biography: { type:DataTypes.STRING(2000), allowNull:true },
      birthdate: { type: DataTypes.STRING, allowNull: false },      
      password:  { type: DataTypes.STRING, allowNull: false },
      username:  { type: DataTypes.STRING, allowNull: false },
      gender:    { type: DataTypes.STRING, allowNull: false },
      phone:     { type: DataTypes.STRING, allowNull: false },
      email:     { type: DataTypes.STRING, allowNull: false },
      photo:     { type:DataTypes.STRING, allowNull:true }
  }, {
    sequelize,
    modelName: 'Users',
  });

  return Users;
};
