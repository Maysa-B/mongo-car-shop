import { describe } from 'mocha';
import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const bikeBodyReq = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const mockBikeResturn = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const bikeInstance = new Motorcycle(mockBikeResturn as IMotorcycle);

describe('Testes de Motorcycle Service', () => {
  afterEach(function () { return sinon.restore(); });

  const service = new MotorcycleService();

  it('Testa a função registerBike em caso de sucesso', async function () {
    sinon.stub(Model, 'create').resolves(mockBikeResturn);

    const insertResult = await service.registerBike(bikeBodyReq as IMotorcycle);

    expect(insertResult).to.be.deep.equal(bikeInstance);
  });

  it('Testa a função findBikes em caso de sucesso', async function () {
    sinon.stub(Model, 'find').resolves([mockBikeResturn, mockBikeResturn]);

    const findResult = await service.findBikes();

    expect(findResult).to.be.deep.equal([bikeInstance, bikeInstance]);
  });

  it('Testa a função findBikeById em caso de sucesso', async function () {
    sinon.stub(Model, 'findOne').resolves(mockBikeResturn);

    const findResult = await service.findBikeById('6348513f34c397abcad040b2');

    expect(findResult).to.be.deep.equal(bikeInstance);
  });

  it('Testa a função findBikeById quando o id é inválido', async function () {
    sinon.stub(Model, 'findOne').resolves({});

    const findResult = await service.findBikeById('id-invalido');

    expect(findResult).to.be.deep.equal(422);
  });

  it('Testa a função findBikeById quando o carro não existe', async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    const findResult = await service.findBikeById('6348513f34c397abcad040b2');

    expect(findResult).to.be.deep.equal(404);
  });

  it('Testa a função updateBike em caso de sucesso', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(mockBikeResturn);

    const findResult = await service
      .updateBike('6348513f34c397abcad040b2', bikeBodyReq as IMotorcycle);

    expect(findResult).to.be.deep.equal(bikeInstance);
  });

  it('Testa a função updateBike quando o id é inválido', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves({});

    const findResult = await service.updateBike('id-invalido', bikeBodyReq as IMotorcycle);

    expect(findResult).to.be.deep.equal(422);
  });

  it('Testa a função updateBike quando o carro não existe', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

    const findResult = await service
      .updateBike('6348513f34c397abcad040b2', bikeBodyReq as IMotorcycle);

    expect(findResult).to.be.deep.equal(404);
  });

  it('Testa a função deleteBike em caso de sucesso', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves(mockBikeResturn);

    const findResult = await service
      .deleteBike('6348513f34c397abcad040b2');

    expect(findResult).to.be.deep.equal(mockBikeResturn);
  });

  it('Testa a função deleteBike quando o id é inválido', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves({});

    const findResult = await service.deleteBike('idsfdf');

    expect(findResult).to.be.deep.equal(422);
  });

  it('Testa a função deleteBike quando o carro não existe', async function () {
    sinon.stub(Model, 'findByIdAndDelete').resolves(null);

    const findResult = await service
      .deleteBike('6348513f34c397abcad040b2');

    expect(findResult).to.be.deep.equal(404);
  });
});