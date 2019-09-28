import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrandComponent } from './header/brand/brand.component';
import { HomeComponent } from './header/home/home.component';
import { DropdownComponent } from './header/dropdown/dropdown.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { BodyComponent } from './body/body.component';
import { FormsComponent } from './forms/forms.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    HomeComponent,
    DropdownComponent,
    SearchComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    SignupFormComponent,
    SigninFormComponent,
    BodyComponent,
    FormsComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
