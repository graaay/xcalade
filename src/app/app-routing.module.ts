import { HomeLoLComponent } from './home-lo-l/home-lo-l.component';
import { HomeFifaComponent } from './home-fifa/home-fifa.component';
import { HomeCsComponent } from './home-cs/home-cs.component';
import { EscolhaJogoComponent } from './escolha-jogo/escolha-jogo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "cadastro", component: CadastroComponent},
  {path: "escolhaJogo", component: EscolhaJogoComponent},
  {path: "homeCs", component: HomeCsComponent},
  {path: "homeFifa", component: HomeFifaComponent},
  {path: "homeLol", component: HomeLoLComponent},

  {path: "", redirectTo: "/login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
