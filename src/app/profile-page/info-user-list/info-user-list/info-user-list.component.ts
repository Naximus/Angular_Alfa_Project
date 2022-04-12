import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../../profile-page.service';
import { UserInfo } from '../../user-info.model';


@Component({
  selector: 'app-info-user-list',
  templateUrl: './info-user-list.component.html',
  styleUrls: ['./info-user-list.component.css']
})
export class InfoUserListComponent implements OnInit {
  userInfo: UserInfo[];
  constructor(
    private userInfoService : UserInfoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userInfo = this.userInfoService.getUserInfos();
  }
  onNewUserInfo() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
