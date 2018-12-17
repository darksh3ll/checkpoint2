const models = require('../models')
const Gift = models.Gift

module.exports = {
  index: function(req, res, next){
    Gift.findAll({include: 'person'})
    .then((gifts) => res.json(gifts))
    .catch((err) => console.log(err))
  },
  create: function(req, res, next){
    Gift.create({
      title: req.body.title,
      price: req.body.price,
      personId: req.body.personId
    })
    .then((gift) => res.json(gift))
    .catch((err) => console.log(err))
  },
  edit: function(req, res, next){
    Gift.findByPk(req.params.id)
    .then((gift) => {
      if(gift){
        gift.update({
          title: req.body.title,
          price: req.body.price,
          personId: req.body.personId,
        })
        .then((updatedGiftDatas) => res.json(updatedGiftDatas))
        .catch((err) => console.log(err))
      } else {
        res.json({message: 'User was not found !'})
      }
    })
    .catch((err) => console.log(err))
  },
  delete: function(req, res, next){
    Gift.findByPk(req.params.id)
    .then((gift) => {
      if(gift){
        gift.destroy()
        .then((destroyedGift) => res.json(destroyedGift))
        .catch((err) => console.log(err))
      } else {
        res.json({message: 'Not found !'})
      }
    })
    .catch((err) => console.log(err))
  }
}