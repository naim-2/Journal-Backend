import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { User } from '../entity/User';
import bcrypt from 'bcryptjs';

export const updateUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const userId = req.body.userId;

  const user = await AppDataSource.manager.findOne(User, { where: { id: userId } });
  if (!user) {
    return res.status(404).send('User not found');
  }

  if (username) {
    user.username = username;
  }

  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
  }

  await AppDataSource.manager.save(user);
  res.send('User updated successfully');
};
