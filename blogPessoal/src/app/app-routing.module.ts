import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
<<<<<<< HEAD
=======
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
>>>>>>> consumo-api


const routes: Routes = [
  { path: "", redirectTo:"home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
<<<<<<< HEAD
  { path: "feed", component: FeedComponent},
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent},
  { path: "cadastro-tema", component: PostTemaComponent}
=======
  { path:"feed", component: FeedComponent},
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent},
  { path: "cadastro-tema", component: PostTemaComponent},
  { path: "edita-post/:id", component: PutPostagemComponent},
  { path: "delete-post/:id", component: DeletePostagemComponent},
  { path: "edita-tema/:id", component: PutTemaComponent},
  { path: "delete-tema/:id", component: DeleteTemaComponent}
>>>>>>> consumo-api
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
