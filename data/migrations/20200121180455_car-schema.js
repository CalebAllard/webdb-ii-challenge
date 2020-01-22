
exports.up = function(knex) {
 return knex.schema.createTable('cars', (table)=>{
      table.increments();
      table.string('model').index();
      table.string('vin').index();
      table.integer('mileage');
  });



};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
