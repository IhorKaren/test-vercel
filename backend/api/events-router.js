import express from 'express';

import getAllEvents from '../controllers/events-controller.js';

const eventsRouter = express.Router();

eventsRouter.get('/', getAllEvents);

export default eventsRouter;
