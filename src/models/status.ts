import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Customer from './customer';
import Opportunity from './opportunity';
import { Op } from 'sequelize';

class Status extends Model {
    public id!: number;
    public name!: string;
    public type!: string;
    public is_active!: boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Status.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: new DataTypes.BOOLEAN(),
            allowNull: true,
        },
    },
    {
        tableName: 'statuses',
        sequelize,
    }
);

// Status.hasMany(Customer, {as: 'customers', foreignKey: 'status_id'});
Status.hasMany(Opportunity, {as: 'opportunities', foreignKey: 'status_id'});

// Customer.belongsTo(Status, { foreignKey: 'status_id', as: 'status' });
Opportunity.belongsTo(Status, { foreignKey: 'status_id', as: 'status' });

Opportunity.beforeValidate(async (opportunity: Opportunity) => {
    const status = await Status.findOne({ where: {
        [Op.and]: [
            { type: 'Opportunity'},
            { is_active: true },
        ]
    } });
    if(status) {
        opportunity.status_id = status.id;
    }
});

export default Status;