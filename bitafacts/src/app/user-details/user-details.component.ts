import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IUser } from '../shared/test-data';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, AfterViewInit {
@Input('user') user:any;
  constructor() { }

  ngOnInit(): void {
    
  }
ngAfterViewInit(){
  console.log(this.user);

}
}
