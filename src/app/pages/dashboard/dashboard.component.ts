import { Component, OnInit } from '@angular/core';
import { DRAWER_OPTIONS } from 'src/app/data/dashboard-drawer.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  drawerOptions = [...DRAWER_OPTIONS];
  selectedDrawerOption = -1;
  isLoading = false;

  constructor() {}

  ngOnInit(): void {}

  onClickDrawerOption(option): void {
    this.selectedDrawerOption = option.id;
  }
}
