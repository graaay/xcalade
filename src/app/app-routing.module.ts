import { PerfilComponent } from './perfil/perfil.component';
import { HomeLoLComponent } from './home-lo-l/home-lo-l.component';
import { HomeFifaComponent } from './home-fifa/home-fifa.component';
import { HomeCsComponent } from './home-cs/home-cs.component';
import { EscolhaJogoComponent } from './escolha-jogo/escolha-jogo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "cadastro", component: CadastroComponent},
  {path: "home", component: HomeComponent, children: [
    {path: "perfil", component: PerfilComponent},
    {path: "escolhaJogo", component: EscolhaJogoComponent},
    {path: "homeCs", component: HomeCsComponent},
    {path: "homeDota", component: HomeFifaComponent},
    {path: "homeLol", component: HomeLoLComponent}
  ]},
  {path: '**', redirectTo: '' },

  // {path: "", redirectTo: "/login"}
  {path: "", redirectTo: "/login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
