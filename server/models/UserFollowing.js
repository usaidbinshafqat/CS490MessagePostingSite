module.exports = (sequelize, DataTypes) => {
    const UserFollowing = sequelize.define("UserFollowing", {
        UID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Following: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    return UserFollowing
}
