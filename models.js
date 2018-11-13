const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/plantr');

module.exports = {
  db,
  Plot,
  Gardener,
  Vegetable
};

const Plot = db.define('plots', {
  name: Sequelize.STRING,
  shaded: Sequelize.BOOLEAN
});

const Gardener = db.define('gardeners', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Vegetable = db.define('veggies', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  plantedOn: Sequelize.DATE,
});

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

/*
A Plot belongs to a Gardener, and a Gardener has one Plot

A Vegetable may belong to many Plots, and a Plot has many Vegetables. This is a many-to-many relationship. Check out that link to see how they're defined in Sequelize. */
