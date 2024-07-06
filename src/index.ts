import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';
import authRoutes from './routes/authRoutes';
import journalRoutes from './routes/journalRoutes';
import userRoutes from './routes/userRoutes';

AppDataSource.initialize().then(() => {
  const app = express();
  const port = process.env.PORT || 3000;
  app.use(express.json());

  app.use('/api/auth', authRoutes);
  app.use('/api/journal', journalRoutes);
  app.use('/api/user', userRoutes);

  app.listen(port, () => {
    console.log('Server is running on port 3000');
  });
});
