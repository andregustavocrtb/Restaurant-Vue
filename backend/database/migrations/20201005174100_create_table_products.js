
exports.up = async knex => {
  await knex.raw(
      `CREATE TABLE products (
        i INT, 
        url VARCHAR NOT NULL,
        name VARCHAR NOT NULL,
        price FLOAT(6) NOT NULL,
        description VARCHAR NOT NULL,
        UNIQUE (i)
      )`
  )
};

exports.down = async knex => await knex.raw('DROP TABLE products')
