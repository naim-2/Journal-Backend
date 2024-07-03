import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { JournalEntry } from './entity/JournalEntry';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://abcpzzsh:ETTKjLoY77bjNL0z2T2oZ_zweKzuMYvl@rogue.db.elephantsql.com/abcpzzsh',
  synchronize: true,
  logging: false,
  entities: [User, JournalEntry],
  migrations: [],
  subscribers: [],
});
