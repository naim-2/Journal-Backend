import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { JournalEntry } from './JournalEntry';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => JournalEntry, (entry) => entry.user)
  entries!: JournalEntry[];
}
