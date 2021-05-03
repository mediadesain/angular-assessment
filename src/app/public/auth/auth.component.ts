import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class LoginComponent implements OnInit {
  auth:any;
  pop:string = '';

  constructor(public authdata: AuthService) {}

  ngOnInit(): void {
    console.log(this.authdata)
    this.auth = this.authdata
  }

  masuk(val:any){
    console.log('Auth', this.authdata)
    this.authdata.signIn(val)
  }
  keluar(){
    console.log('Auth', this.authdata)
    this.authdata.signOut()
    this.auth.authdata = "";
  }
  perbaharuiData(){
    console.log('Auth', this.authdata.data)
    this.authdata.updateDataAuth(this.authdata.data)
  }

}
