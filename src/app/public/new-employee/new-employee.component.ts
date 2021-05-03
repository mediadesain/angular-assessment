import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { randomKarakter } from '../../mds-helper.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html'
})
export class EmployeeDetailComponent implements OnInit {
  auth:any;
  message:any;
  constructor(
    public authdata: AuthService,
    public http: HttpClient,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.auth = this.authdata;
  }

  addNew(data:any){
    console.log(data)
    if(data.basicSalary === ""  || data.birthDate === ""  || data.description === ""  || data.email === ""  || data.firstName === ""  || data.group === ""  || data.lastName === ""  || data.status === ""){
      this.message = "Make sure all field full filled"
      return
    } else {
      this.http.patch(environment.firebase.databaseURL+'/employee/'+randomKarakter(15)+'/.json', data)
        .subscribe(data => {
            console.log(data)
            this.message = "Data has been submited";
            setTimeout( ()=> {
              this.router.navigate(['/'])
            }, 1000)
        });
    }
    
  }


}