module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define(
    "users",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "user",
    }
  );
  users.associate = (models) => {
    users.hasMany(models.tweets, { foreignKey: "user_id" });
  };
  return users;
};
