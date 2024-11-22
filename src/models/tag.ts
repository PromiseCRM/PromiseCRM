import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import sequelize from '../config/database';

class Tag extends Model {
    public id!: number;
    public name!: string;
    public is_active!: boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
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
        tableName: 'tags',
    }
);

sequelize.define('customer_tag', {
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    tag_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
}, {
    tableName: 'customer_tag',
    timestamps: false,
});

export default Tag;