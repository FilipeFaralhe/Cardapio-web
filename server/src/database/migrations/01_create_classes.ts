import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('prato', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('bio').notNullable();
    table.string('category').notNullable();
    table.decimal('cost').notNullable();

    table.integer('user_id').notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('prato');
}