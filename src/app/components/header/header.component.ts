import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onToggle = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onToggleSideNav(): void {
    this.onToggle.emit(true);
  }
}
