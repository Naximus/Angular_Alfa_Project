import { Injectable } from '@angular/core';

import { UserInfo } from './user-info.model';
import { infoProgress } from '../shared/user-form-info.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class UserInfoService {

  private userInfos: UserInfo[] = [
    new UserInfo(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new infoProgress('Meat', 1),
        new infoProgress('French Fries', 20)
      ]),
    new UserInfo('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new infoProgress('Buns', 2),
        new infoProgress('Meat', 1)
      ])
  ];

  // constructor(private slService: ShoppingListService) {}

  getUserInfos() {
    return this.userInfos.slice();
  }

  getUserInfo(index: number) {
    return this.userInfos[index];
  }

  // addinfoProgressToShoppingList(infoProgress: infoProgress[]) {
    // this.slService.addinfoProgresss(infoProgress);
  // }
}
