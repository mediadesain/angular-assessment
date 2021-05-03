import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public:boolean = true;

  constructor(private location:Location) {}

  ngOnInit(){
    console.log(location)
  }
}
