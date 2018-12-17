'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gift = sequelize.define('Gift', {
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
    personId: DataTypes.INTEGER
  }, {});
  Gift.associate = function(models) {
    Gift.belongsTo(models.Person, {foreignKey: 'personId', as: 'person'})
  };
  return Gift;
};