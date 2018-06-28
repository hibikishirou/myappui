import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MENUS } from './models/menu';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  menus = MENUS;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
    map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
