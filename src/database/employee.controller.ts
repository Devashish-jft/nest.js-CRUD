import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
//import { Controller, UseGuards, Request } from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport';
import { employeeServices } from "./employee.service";

@Controller("Employee")
export class employeeController{
    constructor(private readonly employeeService : employeeServices,
        ){}
    // @UseGuards(AuthGuard("jwt"))
    @Get()
    getEmployees(){
        return this.employeeService.getEmployees();
    }

    @Post()
    insertEmployees(
        @Body("Name") Name : string,
        @Body("Job") Job : string,
        @Body("Salary") Salary : number,
    ){
        const empID = this.employeeService.insertEmployee(Name, Job, Salary);
        return{
            id : empID,
            Name : Name,
            Job : Job,
            Salary : Salary
        }
    }
    // @Get(":id")
    // editEmployee(@Param("id") id : number){
    //     return this.employeeService.edit(id);
    // }

    @Delete(":id")
    deleteEmployee(@Param("id")id :number){
        return this.employeeService.deleteEmployee(id);
    }
    @Put(":id")
    updateEmployee(
        @Param("id") id : number,
        @Body("Name") Name : string,
        @Body("Job") Job : string,
        @Body("Salary") Salary : number,
        ){
        return this.employeeService.updateEmployee(id, Name, Job, Salary);
    }
}