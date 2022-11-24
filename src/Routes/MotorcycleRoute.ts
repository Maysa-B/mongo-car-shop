import express from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcycleRoute = express.Router();

const controller = new MotorcycleController();

MotorcycleRoute.post('/', controller.registerBike);
MotorcycleRoute.get('/', controller.findBikes);
MotorcycleRoute.get('/:id', controller.findBikeById);
MotorcycleRoute.put('/:id', controller.updateBike);
MotorcycleRoute.delete('/:id', controller.deleteBike);

export default MotorcycleRoute;