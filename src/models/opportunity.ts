import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Status from './status';

class Opportunity extends Model {
    public id!: number;
    public customer_id!: number;
    public status_id!: number;
    public name!: string;
    public value!: string;
    public status!: string;
    public stage!: string;
    public estimed_closed!: Date;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Opportunity.init(
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
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        value: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        stage: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        estimed_closed: {
            type: DataTypes.DATE,
            allowNull: true,
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
        tableName: 'opportunities',
        sequelize,
    }
);

export default Opportunity;