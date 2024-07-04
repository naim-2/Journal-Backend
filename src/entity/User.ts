import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { JournalEntry } from './JournalEntry';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @OneToMany(() => JournalEntry, (entry) => entry.user)
  entries!: JournalEntry[];
}
