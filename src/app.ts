import express from 'express';
import { productRouter, userRouter, ordersRouter, loginRouter } from './routes';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(userRouter);
app.use(ordersRouter);
app.use(loginRouter);

export default app;
