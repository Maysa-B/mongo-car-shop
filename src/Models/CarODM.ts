import { Schema, isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    super(new Schema<ICar>({
      model: { type: String, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      year: { type: Number, required: true },
      buyValue: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
    }), 'Cars');
  }

  registerCar = async (obj: ICar): Promise<ICar> => this.model.create({ ...obj });

  findCars = async (): Promise<ICar[]> => this.model.find({});

  findCarById = async (id: string): Promise<ICar | null | number> => {
    if (!isValidObjectId(id)) return 422;
    return this.model.findOne({ _id: id });
  };

  updateCar = async (id: string, body: ICar): Promise<ICar | 422 | 404> => {
    if (!isValidObjectId(id)) return 422;
    const updateResult = await this.model.findByIdAndUpdate(id, body);
    if (!updateResult) return 404;
    return { id, ...body };
  };

  deleteCar = async (id: string): Promise<ICar | 422 | 404> => {
    if (!isValidObjectId(id)) return 422;
    const deleteResult = await this.model.findByIdAndDelete(id);
    if (!deleteResult) return 404;
    return deleteResult;
  };
}