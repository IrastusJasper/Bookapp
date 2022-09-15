export class Register {
    public firstname: string;
    public lastname: string;
    public email: any;
    public password: any;

    constructor(firstname: string, lastname: string, email: any, password: any){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
}

