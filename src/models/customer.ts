import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Contact from './contact';
import Address from './address';
import Interaction from './interaction';
import Opportunity from './opportunity';
import Status from './status';
import { Op } from 'sequelize';
import Note from './note';
import Tag from './tag';

class Customer extends Model {
    public id!: number;
    public status_id!: number;
    public first_name!: string;
    public last_name!: string;
    public company_name!: string;
    public job_title!: string;
    public birth_date!: string;
    public status!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Customer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        status_id: {
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
        company_name: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
        job_title: {
            type: new DataTypes.STRING(128),
            allowNull: true,
        },
        birth_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
    },
    {
        tableName: 'customers',
        sequelize,
    }
);


Customer.belongsTo(Status, { foreignKey: 'status_id', as: 'status' });

Status.hasMany(Customer, {as: 'customers', foreignKey: 'status_id'});
Customer.hasMany(Contact, {as: 'contacts', foreignKey: 'customer_id'});
Customer.hasMany(Address, {as: 'addresses', foreignKey: 'customer_id'});
Customer.hasMany(Interaction, {as: 'interactions', foreignKey: 'customer_id'});
Customer.hasMany(Opportunity, {as: 'opportunities', foreignKey: 'customer_id'});
Customer.hasMany(Note, {as: 'notes', foreignKey: 'customer_id'});
Customer.belongsToMany(Tag, { as: "tags", through: 'customer_tag', foreignKey: 'customer_id', otherKey: 'tag_id' });

Contact.belongsTo(Customer, { foreignKey: 'customer_id', as: 'customer' });
Address.belongsTo(Customer, { foreignKey: 'customer_id', as: 'customer' });
Interaction.belongsTo(Customer, { foreignKey: 'customer_id', as: 'customer' });
Opportunity.belongsTo(Customer, { foreignKey: 'customer_id', as: 'customer' });
Note.belongsTo(Customer, { foreignKey: 'customer_id', as: 'customer' });
Tag.belongsToMany(Customer, { through: 'customer_tag', foreignKey: 'tag_id', otherKey: 'customer_id' });

Customer.beforeValidate(async (customer) => {    
    const status = await Status.findOne({
        where: {
            [Op.and]: [
                { type: 'Customer' },
                { is_active: true }
            ]
        }
    })

    if(status) {
        customer.status_id = status.id;
    }
});

export default Customer;