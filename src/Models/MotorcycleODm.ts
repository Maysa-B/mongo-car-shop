import { isValidObjectId, Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    super(new Schema<IMotorcycle>({
      model: { type: String, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      year: { type: Number, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }), 'Motorcycles');
  }

  registerBike = async (obj: IMotorcycle): Promise<IMotorcycle> => this.model.create({ ...obj });

  findBikes = async (): Promise<IMotorcycle[]> => this.model.find({});

  findBikeById = async (id: string): Promise<IMotorcycle | null | number> => {
    if (!isValidObjectId(id)) return 422;
    return this.model.findOne({ _id: id });
  };

  updateBike = async (id: string, body: IMotorcycle): Promise<IMotorcycle | 422 | 404> => {
    if (!isValidObjectId(id)) return 422;
    const updateResult = await this.model.findByIdAndUpdate(id, body);
    if (!updateResult) return 404;
    return { id, ...body };
  };

  deleteBike = async (id: string): Promise<IMotorcycle | 422 | 404> => {
    if (!isValidObjectId(id)) return 422;
    const deleteResult = await this.model.findByIdAndDelete(id);
    if (!deleteResult) return 404;
    return deleteResult;
  };
}