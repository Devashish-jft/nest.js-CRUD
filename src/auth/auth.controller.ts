import { Body, Controller, Post, Redirect } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller()
export class AuthController{
    constructor(private authService: AuthService){}

    @Post("login")
    login(@Body() dto: AuthDto){
        return this.authService.login(dto);
        
    }

    @Post("register")
    signup(@Body() dto: AuthDto){
        return this.authService.signup(dto);
    }
}