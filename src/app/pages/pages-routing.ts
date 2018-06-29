import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  { path: '', component: PagesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
