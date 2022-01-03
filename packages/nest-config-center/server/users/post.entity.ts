import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: number;

  @ManyToMany(() => User, (user) => user.posts, { onDelete: "CASCADE" })
  users: User[];
}
