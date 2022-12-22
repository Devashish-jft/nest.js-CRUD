import { employeeData } from './employee.entities';

export const employeeProviders = [
  {
    provide: 'EMPLOYEE_REPOSITORY',
    useValue: employeeData,
  },
];