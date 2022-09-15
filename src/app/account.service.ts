import { Login } from "./login.model";
import { Register } from "./register.model"

export class AccountService{
    private registers: Register[] = [
        new Register(
            "",
            "",
            "",
            ""
        )
    ]
    addAccount(firstname: any, lastname: any, email: any, password: any){
        this.registers.push(new Register(firstname,lastname,email,password));
        localStorage.setItem('registers',JSON.stringify(this.registers));
        console.log(this.registers);
    }
    private logins: Login[] = [
        new Login(
            "",
            ""
        )
    ]

    onCheck(email: any, password: any){

        this.logins.push(new Login(email,password));
        let registerDetail = localStorage.getItem('registers');
        console.log(registerDetail)
    }
}