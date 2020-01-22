
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {model: "Van", vin:"23f234",mileage: 1200},
        {model: "Jeep", vin:"23fwf234f",mileage: 1200},
        {model: "Truck", vin:"23f23f23",mileage: 1200}      ]);
    });
};
