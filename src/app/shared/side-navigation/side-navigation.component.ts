import { Component, OnInit } from '@angular/core';

import { IMenuItem } from '../models/menu-item'

@Component({
  selector: '[navigation]',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.sass']
})
export class SideNavigationComponent implements OnInit {

  navs: IMenuItem[] = [];

  constructor() {
    this.navs.push({ iconCssClass:'ni ni-tv-2',navUrl:'dashboard.html',title:'Dashboard1' } as IMenuItem);
    this.navs.push({ iconCssClass:'ni ni-tv-2',navUrl:'dashboard.html',title:'Dashboard2' } as IMenuItem);
    this.navs.push({ iconCssClass:'ni ni-tv-2',navUrl:'dashboard.html',title:'Dashboard3' } as IMenuItem);
    this.navs.push({ iconCssClass:'ni ni-tv-2',navUrl:'dashboard.html',title:'Dashboard4' } as IMenuItem);
    this.navs.push({ iconCssClass:'ni ni-tv-2',navUrl:'dashboard.html',title:'Dashboard5' } as IMenuItem);
    this.navs.push({ iconCssClass:'ni ni-tv-2',navUrl:'dashboard.html',title:'Dashboard6' } as IMenuItem);
   }

  ngOnInit() {
  }

}
