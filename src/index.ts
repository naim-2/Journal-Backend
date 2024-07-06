import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';
import authRoutes from './routes/authRoutes';
import journalRoutes from './routes/journalRoutes';
import userRoutes from './routes/userRoutes';
import cors from 'cors';

AppDataSource.initialize().then(() => {
  const app = express();
  const port = process.env.PORT || 3000;
  app.use(express.json());
  const options = {
    origin: 'http://localhost:8081',
  }
  app.use(cors(options))

  app.use('/api/auth', authRoutes);
  app.use('/api/journal', journalRoutes);
  app.use('/api/user', userRoutes);

  app.listen(port, () => {
    console.log('Server is running on port 3000');
  });
});
