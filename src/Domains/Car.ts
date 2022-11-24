import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(obj: ICar) {
    super(obj);
    this.doorsQty = obj.doorsQty;
    this.seatsQty = obj.seatsQty;
  }

  getDoorsQty(): number {
    return this.doorsQty;
  }

  setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  getSeatsQty(): number {
    return this.seatsQty;
  }

  setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
}
