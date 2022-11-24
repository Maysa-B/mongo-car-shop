import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODm';

export default class MotorcycleService {
  constructor(
    private _bikeODM = new MotorcycleODM(),
  ) {}

  private createDomain = (obj: IMotorcycle) => new Motorcycle(obj);

  registerBike = async (obj: IMotorcycle): Promise<Motorcycle> => {
    const insertResult = await this._bikeODM.registerBike(obj);
    return this.createDomain(insertResult);
  };

  findBikes = async (): Promise<Motorcycle[]> => {
    const bikes = await this._bikeODM.findBikes();
    const result = bikes.map((bike) => this.createDomain(bike));
    return result;
  };

  findBikeById = async (id: string): Promise<Motorcycle | 422 | 404> => {
    const result = await this._bikeODM.findBikeById(id);

    if (typeof result === 'number') return 422;

    if (result === null) return 404;

    return this.createDomain(result);
  };

  updateBike = async (id: string, body: IMotorcycle): Promise<Motorcycle | 422 | 404> => {
    const result = await this._bikeODM.updateBike(id, body);

    if (typeof result !== 'number') return this.createDomain(result);

    return result;
  };

  deleteBike = async (id: string): Promise<IMotorcycle | 422 | 404> => {
    const result = await this._bikeODM.deleteBike(id);

    return result;
  };
}