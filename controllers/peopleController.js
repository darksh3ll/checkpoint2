const models = require('../models')
const Person = models.Person

module.exports = {
  show: function(req, res, next){
    Person.findByPk(req.params.id)
    .then((person) => res.json(person))
    .catch((err) => console.log(err))
  },
  create: function(req, res, next){
    Person.create({
      lastname: req.body.lastname,
      firstname: req.body.firstname,
      age: req.body.age,
    })
    .then((person) => res.json(person))
    .catch((err) => console.log(err))
  },
  edit: function(req, res, next){
    Person.findByPk(req.params.id)
    .then((person) => {
      if(person){
        person.update({
          lastname: req.body.lastname,
          firstname: req.body.firstname,
          age: req.body.age,
        })
        .then((updatedPersonDatas) => res.json(updatedPersonDatas))
        .catch((err) => console.log(err))
      } else {
        res.json({message: 'User was not found !'})
      }
    })
    .catch((err) => console.log(err))
  },
  delete: function(req, res, next){
    Person.findByPk(req.params.id)
    .then((person) => {
      if(person){
        person.destroy()
        .then((person) => res.json({message: 'User has been deleted !', person}))
        .catch((err) => console.log(err))
      } else {
        res.json({message: 'User was not found !'})
      }

    })
    .catch((err) => console.log(err))
  },
  findByFields: function(req, res, next) {
    let searchable = {};
    if(req.query.name && req.query.age && req.query.price){
      searchable = {where: {firstname: req.query.name, age: req.query.age}}
    }
    else if(req.query.price){
      searchable = {where: {'$gifts.price$' : req.query.price}, include: ['gifts']}
    }
    else if(req.query.name){
      searchable = {where: {firstname: req.query.name}}
    }
    else if(req.query.age){
      searchable = {where: {age: req.query.age}}
    }

    Person.findAll(searchable)
    .then((person) => res.json(person))
    .catch((err) => console.log(err))
  }
}