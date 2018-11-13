const {
  db,
  Vegetable,
  Gardener,
  Plot
} = require('./models');

db.sync({
    force: true
  })

  .then(() => {
    Vegetable.create({
      name: "Carrot",
      color: "Orange",
      plantedOn: Date()
    });
  })

  .then(() => {
    console.log('Database synced!');
    // db.close() // only if using a version of node without `finally`
  })


  .catch(err => {
    console.log('Disaster! Something went wrong! ');
    console.log(err);
    // db.close() // only if using a version of node without `finally`
  })



  .finally(() => { // only if using a version of node WITH `finally`
    db.close();
  });
