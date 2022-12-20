import { Module } from "@nestjs/common";
import { EmployeeController } from "./employee.controllers";
import { EmployeeServices } from "./employee.services";

@Module({
    controllers : [EmployeeController],
    providers : [EmployeeServices]
})


export class EmployeeModule{}