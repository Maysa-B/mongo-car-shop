import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(obj: IVehicle) {
    this.model = obj.model;
    this.year = obj.year;
    this.color = obj.color;
    this.status = obj.status ? obj.status : false;
    this.id = obj.id;
    this.buyValue = obj.buyValue;
  }

  getId(): string | undefined {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }

  getModel(): string {
    return this.model;
  }

  setModel(model: string) {
    this.model = model;
  }

  getYear(): number {
    return this.year;
  }

  setYear(year: number) {
    this.year = year;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }

  getStatus(): boolean {
    return this.status;
  }

  setStatus(status: boolean) {
    this.status = status;
  }

  getBuyValue(): number {
    return this.buyValue;
  }

  setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }
}
