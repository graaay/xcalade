import {FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastroForm: FormGroup;
  usuario: String;
  login: FunctionStringCallback;
  email: String;
  password: String;
  telefone: String;
  dtNascimento: Date;


  constructor(private formValidator: FormBuilder) {
  }

  ngOnInit() {
    this.carregarForm();
  }

  carregarForm() {
    this.cadastroForm = this.formValidator.group({
      usuario: ['', Validators.required],
      login: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      telefone: ['', Validators.required],
      dtNascimento: ['', Validators.required]
    })    
  }
  
  get f() {
    return this.cadastroForm.controls;
  } 
  

  onSubmit() {
    console.log(this.f);
  }

}