import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

class Note extends Model {
    public id!: number;
    public customer_id!: number;
    public content!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Note.init(
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
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'notes',
    }
);

export default Note;