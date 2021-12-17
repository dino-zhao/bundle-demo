import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";
import { Post } from "./post.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(Post) private readonly postRepository: Repository<Post>
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const post1 = new Post();
    post1.name = 111;
    const post2 = new Post();
    post2.name = 222;
    const user = new User();
    user.age = createUserDto.age;
    user.posts = [post1, post2];
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    // await this.usersRepository.delete(id);
    await this.postRepository.delete(id);
  }
}
