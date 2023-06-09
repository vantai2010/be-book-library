'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shelf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here  
      Shelf.hasMany(models.Book_Infor, { foreignKey: 'shelfId', as: 'shelfData' })
    }
  }
  Shelf.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Shelf',
    freezeTableName: true

  });
  return Shelf;
};