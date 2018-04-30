'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Url = loader.database.define('urls', {
  urlId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  shortUrl: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
    freezeTableName: true,
    timestamps: true,
    indexes: [
      {
        fields: ['shortUrl']
      }
    ]
  });

module.exports = Url;