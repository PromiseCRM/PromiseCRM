import 'dotenv/config';
import Fastify, { FastifyInstance } from 'fastify';
import sequelize from './config/database';
import errorHandler from './exceptions';
import initializeRoutes from './routes';

const app: FastifyInstance = Fastify({logger: true});
const port = 8000;

(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: false});
        console.log('Connection established successfully with the database.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

app.setErrorHandler(errorHandler);

initializeRoutes(app);

(async () => {
    try {
       await app.listen({port})
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
})()