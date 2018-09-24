import { AuthGuard } from './_guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'services', component: ServicesListComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
