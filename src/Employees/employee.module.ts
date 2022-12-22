import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { employeeProviders } from "src/database/employee.providers";
//import { employeeService } from "src/database/employee.service";
import { EmployeeController } from "./employee.controllers";
import { EmployeeServices } from "./employee.services";

@Module({
    imports: [DatabaseModule],
    controllers : [EmployeeController],
    providers : [EmployeeServices, ...employeeProviders]
})


export class EmployeeModule{}