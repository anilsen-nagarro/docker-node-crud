import express from "express";
import itemRoutes from './routes/item.routes';
import path from "path";
const app = express();
import cors from 'cors';

app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use('/items', itemRoutes);

export default app;
