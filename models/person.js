'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Person.associate = function(models) {
    Person.hasMany(models.Gift, {as: 'gifts'})
  };
  return Person;
};