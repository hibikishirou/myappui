import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', loadChildren: './pages/pages.module#PagesModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
