import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { registerData } from "./auth.model";
import { AuthDto } from "./dto";

@Injectable()
export class AuthService{
    constructor(private jwtService: JwtService){}
    private signInData : registerData[] = [
    {
        id:1,
        email:"deva@gmail.com",
        password : "deva@123",
    },
    {
        id:2,
        email:"Raju@gmail.com",
        password : "Raju@123",
    },
    {
        id:3,
        email:"Babu@gmail.com",
        password : "Babu@123",
    },
    {
        id:4,
        email:"Shyam@gmail.com",
        password : "Shyam@123",
    },
    {
        id:5,
        email:"Anuradha@gmail.com",
        password : "Anuradha@123",
    },
    {
        id:6,
        email:"Totla@gmail.com",
        password : "Totla@123",
    },
]
login(dto: AuthDto){
    const emp = this.signInData.find((el)=> el.email == dto.email);
    if(!emp) throw new UnauthorizedException ("Employee not found");
    if(emp.password != dto.password) throw new UnauthorizedException ("Password not valid");
    const token = this.newToken(emp.email,emp.id);
    // document.cookie = "key=token";
    return token;

}

signup(dto: AuthDto){
        console.log()
        const emp = this.signInData.find((el)=> el.email == dto.email);
        if(emp) throw new UnauthorizedException ("Employee already exist");
        else{
            const id = this.signInData[this.signInData.length-1].id + 1 || 1;
            const newData = new registerData(id, dto.email,dto.password)
            this.signInData.push(newData);
            return newData;
        }
    }

    newToken(email: string, id: number){
        return this.jwtService.sign({email,id});
    }
}