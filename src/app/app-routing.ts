import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
    { path: '', loadChildren: './pages/page.module.ts#PagesModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });

