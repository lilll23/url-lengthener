'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost/url_fuck',
  {
	  logging: true,
	  dialect: 'postgres',
	  dialectOptions: {//以下を追加
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
