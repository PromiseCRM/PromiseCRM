import { Sequelize } from 'sequelize';


const sequelize = new Sequelize({
  host: process.env.DB_HOST,          
  dialect: 'postgres',       
  username: process.env.DB_USER,          
  password: process.env.DB_PASSWORD,      
  database: process.env.DB_DATABASE,
  logging: false             
});

export default sequelize;