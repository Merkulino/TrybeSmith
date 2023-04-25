import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/errorMiddleware';
import { productRouter, userRouter, ordersRouter, loginRouter } from './routes';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(userRouter);
app.use(ordersRouter);
app.use(loginRouter);

app.use(errorMiddleware);

export default app;
