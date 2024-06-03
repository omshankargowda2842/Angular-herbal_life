import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/login/register/register.component';
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'home', component:LoginComponent },
    // { path: 'home/register', component:RegisterComponent },

    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
    },
]
