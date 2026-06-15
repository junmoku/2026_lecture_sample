import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async findOne(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOne({
      where: { id },
    });

    if (!todo) {
      throw new NotFoundException(`Todo not found. id=${id}`);
    }

    return todo;
  }

  async create(title: string): Promise<Todo> {
    const todo = this.todoRepository.create({
      title,
    });

    return this.todoRepository.save(todo);
  }
}
