import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = this.formValidator.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  login: String;
  password: String;

  constructor(private formValidator: FormBuilder) {
  }

  ngOnInit() {
  }

  get f() {
    return this.loginForm;
  } 
  

  onSubmit() {
    console.log(this.f);
  }

}
