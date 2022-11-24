import { Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

enum BikeErrors {
  'Invalid mongo id' = 422,
  'Motorcycle not found' = 404,
}

export default class MotorcycleController {
  constructor(
    private service = new MotorcycleService(),
  ) {}

  registerBike = async (req: Request, res: Response) => {
    const insertResult = await this.service.registerBike(req.body);
    res.status(201).json(insertResult);
  };

  findBikes = async (req: Request, res: Response) => {
    const bikes = await this.service.findBikes();
    res.status(200).json(bikes);
  };

  findBikeById = async (req: Request, res: Response) => {
    const result = await this.service.findBikeById(req.params.id);

    if (typeof result !== 'number') {
      return res.status(200).json(result);
    }

    if (result === 422) return res.status(422).json({ message: BikeErrors[422] });

    res.status(404).json({ message: BikeErrors[404] });
  };

  updateBike = async (req: Request, res: Response) => {
    const result = await this.service.updateBike(req.params.id, req.body);

    if (typeof result !== 'number') {
      return res.status(200).json(result);
    }

    if (result === 422) return res.status(422).json({ message: BikeErrors[422] });

    res.status(404).json({ message: BikeErrors[404] });
  };

  deleteBike = async (req: Request, res: Response) => {
    const result = await this.service.deleteBike(req.params.id);

    if (typeof result !== 'number') {
      return res.sendStatus(204);
    }

    if (result === 422) return res.status(422).json({ message: BikeErrors[422] });

    res.status(404).json({ message: BikeErrors[404] });
  };
}