import express from 'express';
import CarRoute from './Routes/CarRoute';
import MotorcycleRoute from './Routes/MotorcycleRoute';

const app = express();

app.use(express.json());

app.use('/cars', CarRoute);
app.use('/motorcycles', MotorcycleRoute);

export default app;
