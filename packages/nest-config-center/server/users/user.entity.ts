import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Post } from "./post.entity";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  age: number;

  @ManyToMany(() => Post, (post) => post.users, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  posts: Post[];
}
