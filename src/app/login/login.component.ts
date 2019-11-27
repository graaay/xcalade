import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup;
  login: String;
  password: String;
  public try = false;
  
  constructor(private formValidator: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.carregarForm();
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
    console.log(this.try);
    this.try = true;
    if (this.loginForm.status === 'VALID') {
      this.router.navigate(['/home']);
    } else {
      // alert('É necessário informar todos os campos!');
    }
  }

}
