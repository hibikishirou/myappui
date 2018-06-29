import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatExpansionModule, MatListModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routing } from './pages-routing';

@NgModule({
  imports: [
    routing,
    CommonModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    SharedModule,
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule { }
