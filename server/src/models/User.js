module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    reg_year: DataTypes.INTEGER
  })
