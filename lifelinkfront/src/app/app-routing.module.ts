import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';


const routes: Routes = [
    {
      path: "",
      component:LoginComponent,
      pathMatch:"full"
      
    },
    {
      path:"signup",
      component:SingupComponent,
      pathMatch:"full"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
