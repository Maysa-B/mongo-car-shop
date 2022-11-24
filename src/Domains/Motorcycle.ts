import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(obj: IMotorcycle) {
    super(obj);
    this.category = obj.category;
    this.engineCapacity = obj.engineCapacity;
  }

  getCategory(): 'Street' | 'Custom' | 'Trail' {
    return this.category;
  }

  setCategory(category: 'Street' | 'Custom' | 'Trail') {
    this.category = category;
  }

  getEngineCapacity(): number {
    return this.engineCapacity;
  }

  setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
}
