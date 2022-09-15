import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AccountService]
})
export class RegisterComponent implements OnInit {
 
  @Output() featureSelection = new EventEmitter<string >()
  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {
  }
  onSignUp(firstname: string,lastname: string,email: any,password: any){
    // this.accountService.addAccount(new Register(firstname,lastname,email,password));
    this.accountService.addAccount(firstname,lastname,email,password)
    alert('Register successful');
  }

  onClick(feature: string){
    this.featureSelection.emit(feature);
  }
  onLoadSign(){
    this.router.navigate(['/login'])
  }
}
