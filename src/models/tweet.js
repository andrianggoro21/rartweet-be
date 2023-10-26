module.exports = (sequelize, Sequelize) => {
    const tweets = sequelize.define(
        "tweets", 
        {
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            tweet: {
                type: Sequelize.STRING,
            },
            // date_tweet: {
            //     type: Sequelize.DATE,
            // },
        },
        {
            timestamps: true,
            tableName: "tweet"
        }
            
    );
    // branch.associate = (models) => {
    //     branch.hasMany(models.user, {foreignKey: "branchId"});
    // }
    return tweets;
}