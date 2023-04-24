import express from 'express';
// import productRouter from './routes';
import productRouter from './routes/products.route';

const app = express();

app.use(express.json());

app.use(productRouter);

export default app;
