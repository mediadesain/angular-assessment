import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html'
})
export class MenubarComponent implements OnInit {
  auth:any;
  constructor(public authdata: AuthService) {}

  ngOnInit(): void {
    this.auth = this.authdata;
  }

  keluar(){
    console.log('Auth', this.authdata)
    this.authdata.signOut()
    this.auth.authdata = "";
  }
}
