import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('prato', table => {
    table.increments('id').primary();
    table.string('nameRest').notNullable();
    table.string('whatsapp').notNullable();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('bio').notNullable();
    table.string('category').notNullable();
    table.decimal('cost').notNullable();
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('prato');
}