import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateClienteComponent } from './components/create-cliente/create-cliente.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { appRouting } from './app-routes';
import { LoginComponent } from './components/login/login.component';
import { CreacteBusComponent } from './components/creacte-bus/creacte-bus.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateClienteComponent,
    NavbarComponent,
    ListComponent,
    LoginComponent,
    CreacteBusComponent,
    FooterComponent
  ],
  imports: [BrowserModule, appRouting],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
