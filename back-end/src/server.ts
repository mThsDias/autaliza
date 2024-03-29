import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/user.routes';

const app = express();

app.use(express.json());

const PORT = 8080;

app.use(cors());

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
