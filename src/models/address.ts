import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Address extends Model {
    public id!: number;
    public customer_id!: number;
    public street!: string;
    public number?: string;
    public neighborhood!: string;
    public city!: string;
    public state!: string;
    public zipCode!: string;
    public country!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Address.init(
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
        street: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        number: {
            type: new DataTypes.STRING(10),
            allowNull: true, // Campo opcional
        },
        neighborhood: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        city: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        state: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        zipCode: {
            type: new DataTypes.STRING(10),
            allowNull: false,
        },
        country: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
    },
    {
        tableName: 'addresses',
        sequelize,
    }
);

export default Address;