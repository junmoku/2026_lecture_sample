import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.todosService.findOne(id);
  }

  @Post()
  create(@Body('title') title: string) {
    return this.todosService.create(title);
  }
}
