import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class employeeData extends Model {
  @Column
  Name: string;

  @Column
  Job: string;

  @Column
  Salary : number;
}