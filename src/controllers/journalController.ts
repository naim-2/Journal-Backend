import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { JournalEntry } from '../entity/JournalEntry';
import { User } from '../entity/User';
import { MoreThan } from 'typeorm';

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
  res.send({
      "title": entry.title,
      "content": entry.content,
      "category": entry.category,
      "date": entry.date,
      "id": entry.id
  });
};

export const getEntries = async (req: Request, res: Response) => {
  const entries = await AppDataSource.manager.find(JournalEntry, { where: { user: { id: req.body.userId } } });
  res.json(entries);
};

export const editJournalEntry = async (req: Request, res: Response) => {
  const { id, title, content, category, date } = req.body;
  const userId = req.body.userId;

  const entry = await AppDataSource.manager.findOne(JournalEntry, { where: { id, user: { id: userId } } });
  if (!entry) {
    return res.status(404).send('Journal entry not found');
  }

  if (title) entry.title = title;
  if (content) entry.content = content;
  if (category) entry.category = category;
  if (date) entry.date = date;

  await AppDataSource.manager.save(entry);
  res.send({
    "title": entry.title,
    "content": entry.content,
    "category": entry.category,
    "date": entry.date,
    "id": entry.id
  });
};

export const deleteJournalEntry = async (req: Request, res: Response) => {
  const { id } = req.body;
  const userId = req.body.userId;

  const entry = await AppDataSource.manager.findOne(JournalEntry, { where: { id, user: { id: userId } } });
  if (!entry) {
    return res.status(404).send('Journal entry not found');
  }

  await AppDataSource.manager.remove(entry);
  res.send({"id": entry.id});
};
