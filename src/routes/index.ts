import { FastifyInstance } from "fastify";
import customerRoutes from "./customer";
import contactRoutes from "./contact";
import addressRoutes from "./address";
import interactionsRoutes from "./interactions";
import statusRoutes from "./status";
import opportunityRoutes from "./opportunity";
import noteRoutes from "./note";
import tagRoutes from "./tag";

const initializeRoutes = (app: FastifyInstance) => {
    app.register(customerRoutes, {prefix: '/api'});
    app.register(contactRoutes, {prefix: '/api'});
    app.register(addressRoutes, {prefix: '/api'});
    app.register(interactionsRoutes, {prefix: '/api'});
    app.register(statusRoutes, {prefix: '/api'});
    app.register(opportunityRoutes, {prefix: '/api'});
    app.register(noteRoutes, {prefix: '/api'});
    app.register(tagRoutes, {prefix: '/api'});
}

export default initializeRoutes;