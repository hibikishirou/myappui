import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu';
import { Input } from '@angular/core/';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input()
  menuItem: MenuItem;
  constructor(private router: Router, private activedRoute: ActivatedRoute ) { 

  }

  ngOnInit() {
  }
  goto(link) {
    this.router.navigate([link]);
  }
}
