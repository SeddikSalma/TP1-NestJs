import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Version } from '@nestjs/common';
import { MergeType } from 'mongoose';
import { CreateTodoDto } from 'src/DTO/create-todo';
import { Pagination } from 'src/DTO/pagination';
import { SearchTodoDto } from 'src/DTO/search-todo';
import { UpdateTodoTdo } from 'src/DTO/update-todo';
import { TodoModuleService } from './todo-module.service';

@Controller('/todo')
export class TodoModuleController {
    constructor(private todoModuleService: TodoModuleService){}

    @Get()
    getTodos(){
        return this.todoModuleService.getAll();
    }

    @Get()
    @Version("2")
    getTodosDb(@Query() queryParam: MergeType<Pagination, SearchTodoDto>){
        return this.todoModuleService.getAllDb(queryParam)
    }

    @Get("/stats")
    @Version("2")
    getStatsTodoDb(){
        return this.todoModuleService.getStats();
    }

    @Version("2")
    @Post("/restore/:id")
    restoreTodoDb(@Param('id') id: string){
        return this.todoModuleService.restoreById(id)
    }

    @Get('/:id')
    getTodo(@Param('id') id: string){
        return this.todoModuleService.getById(id);
    }

    @Get('/:id')
    @Version("2")
    getTodoDb(@Param('id') id: string){
        return this.todoModuleService.getByIdDb(id);
    }

    @Delete('/:id')
    deleteTodo(@Param('id') id: string){
        return this.todoModuleService.deleteById(id);
    }

    @Delete('/:id')
    @Version("2")
    deleteTodoDb(@Param('id') id: string){
        return this.todoModuleService.deleteByIdDb(id);
    }

    @Patch()
    updateTodo(@Body() body: UpdateTodoTdo){
        return this.todoModuleService.updateTodo(body);
    }

    @Version("2")
    @Patch()
    updateTodoDb(@Body() body: UpdateTodoTdo){
        return this.todoModuleService.updateTodoDb(body);
    }

    @Post()
    createTodo(@Body() body: CreateTodoDto){
        return this.todoModuleService.createTodo(body);
    }

    @Version("2")
    @Post()
    createTodoDb(@Body() body: CreateTodoDto){
        return this.todoModuleService.createTodoDb(body);
    }
}
