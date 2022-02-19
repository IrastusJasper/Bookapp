import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AccountService]
})
export class RegisterComponent implements OnInit {
 
  @Output() featureSelection = new EventEmitter<string >()
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  onSignUp(firstname: string,lastname: string,email: any,password: any){
    this.accountService.addAccount(firstname,lastname,email,password,);
    alert('Register successful');
  }

  onClick(feature: string){
    this.featureSelection.emit(feature)
  }
}
