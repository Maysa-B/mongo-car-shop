import express from 'express';
import CarController from '../Controllers/CarController';

const CarRoute = express.Router();

const controller = new CarController();

CarRoute.post('/', controller.registerCar);
CarRoute.put('/:id', controller.updateCar);
CarRoute.get('/', controller.findCars);
CarRoute.get('/:id', controller.findCarById);
CarRoute.delete('/:id', controller.deleteCar);

export default CarRoute;