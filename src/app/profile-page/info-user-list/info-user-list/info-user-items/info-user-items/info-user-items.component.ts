import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/profile-page/user-info.model';

@Component({
  selector: 'app-info-user-items',
  templateUrl: './info-user-items.component.html',
  styleUrls: ['./info-user-items.component.css']
})
export class InfoUserItemsComponent implements OnInit {

  @Input() userInfo: UserInfo;
  @Input() index: number;

  ngOnInit(): void {
  }

}
