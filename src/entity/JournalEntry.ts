import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class JournalEntry {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  content!: string;

  @Column()
  category!: string;

  @Column()
  date!: Date;

  @ManyToOne(() => User, (user) => user.entries)
  user!: User;
}
