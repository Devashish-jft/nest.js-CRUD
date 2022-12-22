import { Module } from '@nestjs/common';
import { employeeController } from './employee.controller';
import { employeeServices } from './employee.service';
import { employeeProviders } from './employee.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [employeeController],
  providers: [
    employeeServices,
    ...employeeProviders,
  ],
})
export class employeeModule {}