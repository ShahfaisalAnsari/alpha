import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:"",
    component:AuthComponent, children:[
      {
        path:"",
        loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
      },
      {
        path:"signup",
        loadChildren:()=>import('./signup/signup.module').then(m=>m.SignupModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
