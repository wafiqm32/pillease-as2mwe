import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'paracetemol',
    loadComponent: () => import('./paracetemol/paracetemol.page').then( m => m.ParacetemolPage)
  },
  {
    path: 'lansoprazole',
    loadComponent: () => import('./lansoprazole/lansoprazole.page').then( m => m.LansoprazolePage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'logout',
    loadComponent: () => import('./logout/logout.page').then( m => m.LogoutPage)
  },
  {
    path: 'historylog',
    loadComponent: () => import('./historylog/historylog.page').then( m => m.HistorylogPage)
  },
  {
    path: 'guideline1',
    loadComponent: () => import('./guideline1/guideline1.page').then( m => m.Guideline1Page)
  },
  {
    path: 'guideline2',
    loadComponent: () => import('./guideline2/guideline2.page').then( m => m.Guideline2Page)
  },
  {
    path: 'guideline',
    loadComponent: () => import('./guideline/guideline.page').then( m => m.GuidelinePage)
  },
  {
    path: 'guideline3',
    loadComponent: () => import('./guideline3/guideline3.page').then( m => m.Guideline3Page)
  },
  {
    path: 'guideline4',
    loadComponent: () => import('./guideline4/guideline4.page').then( m => m.Guideline4Page)
  },
  {
    path: 'guideline5',
    loadComponent: () => import('./guideline5/guideline5.page').then( m => m.Guideline5Page)
  },

];
