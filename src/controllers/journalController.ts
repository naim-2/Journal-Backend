import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { JournalEntry } from '../entity/JournalEntry';
import { User } from '../entity/User';

export const createEntry = async (req: Request, res: Response) => {
  const { title, content, category, date } = req.body;
  const user = await AppDataSource.manager.findOne(User, { where: { id: req.body.userId } });
  
  if (!user) {
    return res.status(404).send('User not found');
  }

  const entry = new JournalEntry();
  entry.title = title;
  entry.content = content;
  entry.category = category;
  entry.date = new Date(date);
  entry.user = user;
  await AppDataSource.manager.save(entry);
  res.send('Entry created');
};

export const getEntries = async (req: Request, res: Response) => {
  const entries = await AppDataSource.manager.find(JournalEntry, { where: { user: { id: req.body.userId } } });
  res.json(entries);
};
