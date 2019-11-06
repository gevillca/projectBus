import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateClienteComponent } from './components/create-cliente/create-cliente.component';
import { ListComponent } from './components/list/list.component';
import { CreacteBusComponent } from './components/creacte-bus/creacte-bus.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'createBus', component: CreacteBusComponent },
  { path: 'createClient', component: CreateClienteComponent },
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
