import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Contact extends Model {
    public id!: number;
    public customer_id!: number;
    public first_name!: string;
    public last_name!: string;
    public email!: string;
    public phone_number!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Contact.init(
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
        first_name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        last_name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
        phone_number: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
    },
    {
        tableName: 'contacts',
        sequelize,
    }
);

export default Contact;