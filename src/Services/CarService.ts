import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  constructor(
    private _carODM = new CarODM(),
  ) { }

  private createCarDomain = (obj: ICar): Car => new Car(obj);

  registerCar = async (obj: ICar): Promise<Car> => {
    const insertResult = await this._carODM.registerCar(obj);
    return this.createCarDomain(insertResult);
  };

  findCars = async (): Promise<Car[]> => {
    const cars = await this._carODM.findCars();
    const result = cars.map((car) => this.createCarDomain(car));
    return result;
  };

  findCarById = async (id: string): Promise<Car | 422 | 404> => {
    const result = await this._carODM.findCarById(id);

    if (typeof result === 'number') return 422;

    if (result === null) return 404;

    return this.createCarDomain(result);
  };

  updateCar = async (id: string, body: ICar): Promise<Car | 422 | 404> => {
    const result = await this._carODM.updateCar(id, body);

    if (typeof result !== 'number') return this.createCarDomain(result);

    return result;
  };

  deleteCar = async (id: string): Promise<ICar | 422 | 404> => {
    const result = await this._carODM.deleteCar(id);

    return result;
  };
}