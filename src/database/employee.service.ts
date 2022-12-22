import { Injectable, Inject } from '@nestjs/common';
import { employeeData } from './employee.entities';

@Injectable()
export class employeeServices {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: typeof employeeData,
  ) {}

  async getEmployees(): Promise<employeeData[]> {
    return this.employeeRepository.findAll<employeeData>();
  }

  async insertEmployee(Name: string, Job: string, Salary: number) {
    let user = await { Name, Job, Salary };
    this.employeeRepository.create(user);
  }
  async deleteEmployee(id: number) {
    let user =await this.employeeRepository.findByPk<employeeData>(id);
    user?.destroy();
  }
  async updateEmployee(id:number,Name : string , Job:string,Salary:number){
    let user = await this.employeeRepository.findByPk<employeeData>(id);
    user?.update({Name,Job,Salary});
  }
}
