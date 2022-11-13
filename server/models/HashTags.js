module.exports = (sequelize, DataTypes) => {
    const HashTags = sequelize.define("HashTags", {
        HashTagID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        HashTag: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    return HashTags
}