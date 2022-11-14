import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FindOneOptions,
  Repository,
  UpdateResult,
  DeleteResult,
} from 'typeorm';
import { Todo } from '../todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private TodoRepository: Repository<Todo>,
  ) {}

  async getAll(): Promise<Todo[]> {
    return await this.TodoRepository.find();
  }

  async create(todo: Todo): Promise<Todo> {
    console.log('create next');
    return await this.TodoRepository.create(todo);
  }

  async getOne(id: FindOneOptions<Todo>): Promise<Todo> {
    return await this.TodoRepository.findOne(id);
  }

  async update(id: any, todo: Todo): Promise<UpdateResult> {
    return await this.TodoRepository.update(id, todo);
  }

  async delete(id: any): Promise<DeleteResult> {
    return await this.TodoRepository.delete(id);
  }
}
