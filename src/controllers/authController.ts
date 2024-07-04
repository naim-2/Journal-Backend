import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const existingEmail = await AppDataSource.manager.findOne(User, { where: { email } });
  const existingUsername = await AppDataSource.manager.findOne(User, { where: { username } });
  if (existingEmail || existingUsername) {
    return res.status(400).send('Email or username already in use');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User();
  user.username = username;
  user.email = email;
  user.password = hashedPassword;
  await AppDataSource.manager.save(user);
  res.send('User registered');
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await AppDataSource.manager.findOne(User, { where: { email } });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).send('Invalid credentials');
  }
  const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
  res.json({ token });
};
