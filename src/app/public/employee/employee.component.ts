import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {
  auth: any;
  data : any;
  showperpage : number = 15;
  page : number = 1;
  selected : any;
  constructor(
    public authdata: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.auth = this.authdata;
    this.http.get(environment.firebase.databaseURL+'/employee.json')
      .subscribe(data => {
          var source = Object.values(data)
          this.data = []
          source.forEach( (element:any, i:number) => {
            element.id = Object.keys(data)[i]
            this.data.push(element)
          });
          console.log(this.data)
      }
    );
  };

  viewDetail(data:any){
    console.log(data)
    this.selected = data
  };

  deleteData(val:any, i:any){
    console.log(val)
    this.data.slice(1, i)
    var data = {}
    this.http.delete(environment.firebase.databaseURL+'/employee/'+val+'/.json')
        .subscribe(data => {
            alert("Data has been deleted")
            this.ngOnInit()
        }
    )
  }


}
