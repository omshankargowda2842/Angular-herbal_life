import { Routes, RouterModule } from '@angular/router';
import { authGuard } from './guards/auth.guard';
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
    },
    {
        path: 'products',
        canActivate:[authGuard],
        loadChildren: () => import('./pages/products/products.module').then((m) => m.ProductsModule)
    },
    {
        path: 'profile',
        canActivate:[authGuard],
        loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfileModule)
    },
]
