import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
// import { Login } from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountService]
})

export class LoginComponent implements OnInit {
  
  constructor(private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute) { }
   ngOnInit(): void {
  }
  onLogin(email:any, password:any){
    // this.accountService.onCheck(new Login(email,password));
    this.accountService.onCheck(email, password);
    // this.router.navigate(['login'], {relativeTo: this.route});
  }
}
      