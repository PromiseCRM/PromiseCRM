import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Interaction extends Model {
    public id!: number;
    public customer_id!: number;
    public type!: string;
    public date!: Date;
    public description!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Interaction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'interactions',
        timestamps: true,
    }
);

export default Interaction;