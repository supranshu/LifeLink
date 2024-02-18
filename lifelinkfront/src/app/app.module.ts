import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './pages/login/login.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingupComponent } from './pages/singup/singup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InstitutionComponent } from './pages/institution/institution.component';
<<<<<<< HEAD
import { OrganComponent } from './pages/organ/organ.component';
=======
import { HomepageComponent } from './pages/homepage/homepage.component';
>>>>>>> a703ef29a291c90d750972cf7ad64c867cfe96ba


@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,LoginComponent, SingupComponent, DashboardComponent, InstitutionComponent, OrganComponent
=======
    AppComponent,LoginComponent, SingupComponent, DashboardComponent, InstitutionComponent, HomepageComponent
>>>>>>> a703ef29a291c90d750972cf7ad64c867cfe96ba
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatButtonModule,MatInputModule,MatFormFieldModule,FormsModule, HttpClientModule,MatSnackBarModule, MatCardModule, MatToolbarModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule, MatSelectModule, BrowserAnimationsModule,  
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
