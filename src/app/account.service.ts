export class AccountService{
    account=[
        {}
    ];
    addAccount(firstname: string, lastname: string, email: any, password: any){
        this.account.push({firstname: firstname ,
        lastname: lastname, email: email,
        password: password
    });
    console.log(this.account);
    }
}