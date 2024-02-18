import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InstitutionComponent } from './pages/institution/institution.component';
<<<<<<< HEAD
import { OrganComponent } from './pages/organ/organ.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';

=======
import { HomepageComponent } from './pages/homepage/homepage.component';
>>>>>>> b97a86b346905ea9734226750628db6ca794bfbb


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
    },
    {
      path:"dashboard",
      component:DashboardComponent,
      pathMatch:"full"
    },
    {
      path:"homepage",
      component:HomepageComponent,
      pathMatch:"full"
    },
    {
      path: 'inst-page/:instName', 
      component: InstitutionComponent,
      pathMatch: "full"
    },
    {
      path:'org-page/:orgName/:instName',
      component:HomepageComponent,
      pathMatch: 'full'
    },
    {
      path: 'contact/:donorInstName',
      component:ContactComponent,
      pathMatch:'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
