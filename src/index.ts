import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';
import authRoutes from './routes/authRoutes';
import journalRoutes from './routes/journalRoutes';

AppDataSource.initialize().then(() => {
  const app = express();
  app.use(express.json());

  app.use('/api/auth', authRoutes);
  app.use('/api/journal', journalRoutes);

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
