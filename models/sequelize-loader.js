'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost/url_fuck',
  {
	  logging: true,
	  dialect: 'postgres',
	  dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false
			}
		}
	}
);

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};
