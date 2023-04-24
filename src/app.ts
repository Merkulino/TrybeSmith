import express from 'express';
import { productRouter, userRouter } from './routes';
// import productRouter from './routes/products.route';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(userRouter);

export default app;
