import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

const carReturnMock = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carBodyReq = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carInstance = new Car(carReturnMock);

describe('Testes de CarService', () => {
  afterEach(function () { return sinon.restore(); });

  const service = new CarService();

  it('Testa a função registerCar em caso de sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carReturnMock);

    const insertResult = await service.registerCar(carBodyReq);

    expect(insertResult).to.be.deep.equal(carInstance);
  });

  it('Testa a função findCars em caso de sucesso', async function () {
    sinon.stub(Model, 'find').resolves([carReturnMock, carReturnMock]);

    const findResult = await service.findCars();

    expect(findResult).to.be.deep.equal([carInstance, carInstance]);
  });

  it('Testa a função findCarById em caso de sucesso', async function () {
    sinon.stub(Model, 'findOne').resolves(carReturnMock);

    const findResult = await service.findCarById('6348513f34c397abcad040b2');

    expect(findResult).to.be.deep.equal(carInstance);
  });

  it('Testa a função findCarById quando o id é inválido', async function () {
    sinon.stub(Model, 'findOne').resolves({});

    const findResult = await service.findCarById('id-invalido');

    expect(findResult).to.be.deep.equal(422);
  });

  it('Testa a função findCarById quando o carro não existe', async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    const findResult = await service.findCarById('6348513f34c397abcad040b2');

    expect(findResult).to.be.deep.equal(404);
  });

  it('Testa a função updateCar em caso de sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carReturnMock);

    const findResult = await service.updateCar('6348513f34c397abcad040b2', carBodyReq);

    expect(findResult).to.be.deep.equal(carInstance);
  });

  it('Testa a função updateCar quando o id é inválido', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves({});

    const findResult = await service.updateCar('id-invalido', carBodyReq);

    expect(findResult).to.be.deep.equal(422);
  });

  it('Testa a função updateCar quando o carro não existe', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

    const findResult = await service.updateCar('6348513f34c397abcad040b2', carBodyReq);

    expect(findResult).to.be.deep.equal(404);
  });

  it('Testa a função deleteCar em caso de sucesso', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves(carReturnMock);

    const findResult = await service.deleteCar('6348513f34c397abcad040b2');

    expect(findResult).to.be.deep.equal(carReturnMock);
  });

  it('Testa a função deleteCar quando o id é inválido', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves({});

    const findResult = await service.deleteCar('idsdffdsf');

    expect(findResult).to.be.deep.equal(422);
  });

  it('Testa a função deleteCar quando o carro não existe', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves(null);

    const findResult = await service.deleteCar('6348513f34c397abcad040b2');

    expect(findResult).to.be.deep.equal(404);
  });
});