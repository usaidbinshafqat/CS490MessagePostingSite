module.exports = (sequelize, DataTypes) => {
    const MessageHashTags = sequelize.define("MessageHashTags", {
        MsgHashTagID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        MessageID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        HashTagID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
    return MessageHashTags
}