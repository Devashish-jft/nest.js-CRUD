import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
//import { EmployeeModule } from './Employees/employee.module';
import {employeeModule} from './database/employee.module'

@Module({
  imports: [AuthModule,employeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
