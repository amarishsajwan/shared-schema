module.exports = (sequelize, DataTypes) => {
  const Data = sequelize.define("Data", {
    jsonData: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  });
  return Data;
};
