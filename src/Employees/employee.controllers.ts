import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { EmployeeServices } from "./employee.services";

@Controller("Employee")

export class EmployeeController{
    constructor(private readonly employeeService : EmployeeServices){}

    @Get()
    getEmployees(){
        return this.employeeService.getEmployee();
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

    @Get(":id")
    editEmployee(@Param("id") id : number){
        return this.employeeService.edit(id);
    }

    @Put(":id")
    updateEmployee(
        @Param("id") id : number,
        @Body("Name") Name : string,
        @Body("Job") Job : string,
        @Body("Salary") Salary : number,
        ){
        return this.employeeService.update(id, Name, Job, Salary);
    }
}