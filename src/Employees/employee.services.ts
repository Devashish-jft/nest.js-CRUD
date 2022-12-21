import { Injectable } from "@nestjs/common";
import { Employee } from "./employee.model";

@Injectable()
export class EmployeeServices{
    private employee : Employee[] = [
        {
            id: 1,
            Name: "Devashish",
            Job : "SDE",
            Salary : 2345678
        },
        {
            id: 2,
            Name: "Raju",
            Job : "ITUS",
            Salary : 98765
        },
        {
            id: 3,
            Name: "Babu Bhaiya",
            Job : "Star Garraj",
            Salary : 9876
        },
        {
            id: 4,
            Name: "Shyam",
            Job : "Banker",
            Salary : 87678
        },
        {
            id: 5,
            Name: "Anuradha",
            Job : "Laxmi Cheat Fund",
            Salary : 2345678
        },
        {
            id: 6,
            Name: "Totla Seth",
            Job : "Biss Lath",
            Salary : 2345678
        },
    ]
    insertEmployee(Name: string, Job : string, Salary : number){
        const id = this.employee[this.employee.length-1].id + 1
        const newEmployee = new Employee(id,Name,Job,Salary);
        this.employee.push(newEmployee);
        return id;
    }
    getEmployee(){
        return [...this.employee];
    }
    edit(id:number){
        return this.employee.find((el) => {
            if(el.id == id)
                return el;
        })
    }
    update(id : number, Name: string, Job : string, Salary: number){
        return this.employee.findIndex((el)=>{
            if(el.id == id){
                el.Name = Name,
                el.Job = Job,
                el.Salary = Salary
            }
        })
    }
}
