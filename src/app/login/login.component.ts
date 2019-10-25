import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup;
  login: String;
  password: String;
  
  constructor(private formValidator: FormBuilder) {
  }

  ngOnInit() {
    this.carregarForm;
  }

  carregarForm() {
    this.loginForm = this.formValidator.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })    
  }
  
  get f() {
    return this.loginForm.controls;
  } 
  

  onSubmit() {
    console.log(this.f);
  }

}
