import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { MenuListService } from '../../core/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  username = 'GUESTUPOOOQWE';

  constructor(
    public userService: UserService,
    private menuListService: MenuListService,
  ) { }

  openMenuList() {
    this.menuListService.listDisplaySubject.next({ isDisplay: true });
  }

  signInWithGoogle() {
    console.log('signInWithGoogle');
  }

}
