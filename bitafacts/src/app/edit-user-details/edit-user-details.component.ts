import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../shared/test-data';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.scss']
})
export class EditUserDetailsComponent implements OnInit , AfterViewInit{
@Input('user') user:any;
@Output() editedData:EventEmitter<any>= new EventEmitter<any>();
editedUser:any;
  userId: any;
  userName: any;
  password: any;
  role: any;
  createdDate: any;
  isActive: any;
  
  constructor() { }

  ngOnInit(): void {
    this.editedUser = this.user;
    this.userId = this.editedUser.userId;
    this.userName=this.editedUser.userName;
    this.password=this.editedUser.password;
    this.role=this.editedUser.role;
    this.createdDate=this.editedUser.createdDate;
    this.isActive=this.editedUser.isActive;
console.log('1',this.userName);

  }
  saveEditedData(){
    const value:any={
      userId:this.userId,
      userName:this.userName,
      password:this.password,
      role:this.role,
      createdDate:this.createdDate,
      isActive:this.isActive
    }
    this.editedData.emit(value);
  }
ngAfterViewInit(){
  console.log('aaaa',this.user);

}

}
