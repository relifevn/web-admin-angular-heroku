import { Component } from '@angular/core';
import { MenuListService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tiki-web-app';

  isDisplayMenuList = false;

  constructor(private menuListService: MenuListService) {
    this.menuListService.listDisplay$.subscribe(data => {
      this.isDisplayMenuList = data.isDisplay;
    });
  }

}
