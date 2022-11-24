import { Request, Response } from 'express';
import CarService from '../Services/CarService';

enum CarErrors {
  'Invalid mongo id' = 422,
  'Car not found' = 404,
}

export default class CarController {
  private service: CarService;

  constructor() {
    this.service = new CarService();
  }

  registerCar = async (req: Request, res: Response) => {
    const insertResult = await this.service.registerCar(req.body);
    res.status(201).json(insertResult);
  };

  findCars = async (req: Request, res: Response) => {
    const cars = await this.service.findCars();
    res.status(200).json(cars);
  };

  findCarById = async (req: Request, res: Response) => {
    const result = await this.service.findCarById(req.params.id);

    if (typeof result !== 'number') {
      return res.status(200).json(result);
    }

    if (result === 422) return res.status(422).json({ message: CarErrors[422] });

    res.status(404).json({ message: CarErrors[404] });
  };

  updateCar = async (req: Request, res: Response) => {
    const result = await this.service.updateCar(req.params.id, req.body);

    if (typeof result !== 'number') {
      return res.status(200).json(result);
    }

    if (result === 422) return res.status(422).json({ message: CarErrors[422] });

    res.status(404).json({ message: CarErrors[404] });
  };

  deleteCar = async (req: Request, res: Response) => {
    const result = await this.service.deleteCar(req.params.id);

    if (typeof result !== 'number') {
      return res.sendStatus(204);
    }

    if (result === 422) return res.status(422).json({ message: CarErrors[422] });

    res.status(404).json({ message: CarErrors[404] });
  };
}