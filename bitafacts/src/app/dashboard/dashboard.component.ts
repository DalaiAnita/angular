import { Component, OnInit } from '@angular/core';
import { users, IUser } from './../shared/test-data';
import { UserDetailsService } from '../services/user-details.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userList: IUser[]=[];
  userId: any;
  userName: any;
  password: any;
  role: any;
  isActive: boolean =false;
  selectedUser: any;
  
  constructor(private userDetailsService: UserDetailsService) { }

  ngOnInit(): void {
    this.userList = users;
    // this.userDetailsService.shareUserList.subscribe(data => {
     
    // })
  }
onClickRowData(rowData:any){
this.selectedUser = rowData;
}
onSaveEditedRow(value:IUser){
  this.userList.forEach(x=>{
    if(x.userId == value.userId){
      x.role=value.role;
    }
  })
console.log('parent component',value);
}
}
