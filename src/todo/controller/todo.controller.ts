import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '../todo.entity';
import { UpdateResult, DeleteResult, FindOneOptions } from 'typeorm';

@Controller('todo')
export class TodoController {
  constructor(private readonly TodoService: TodoService) {}
  @Get('test')
  test(): string {
    console.log('test');
    return 'this is a test';
  }

  @Get()
  async getAll(): Promise<Todo[]> {
    console.log('getAll');
    return await this.TodoService.getAll();
  }

  @Get(':id')
  getOne(@Param() id: FindOneOptions<Todo>): Promise<Todo> {
    console.log('getOne');
    return this.TodoService.getOne(id);
  }

  @Post()
  async create(@Body() todo: Todo): Promise<Todo> {
    console.log('create');
    return await this.TodoService.create(todo);
  }

  @Put(':id')
  async update(@Param() id: number, @Body() todo: Todo): Promise<UpdateResult> {
    return await this.TodoService.update(id, todo);
  }

  @Delete(':id')
  delete(@Param() id: number): Promise<DeleteResult> {
    return this.TodoService.delete(id);
  }
}
