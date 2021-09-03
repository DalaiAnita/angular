import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../shared/test-data';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private userList = new BehaviorSubject<IUser[]>([]);
  shareUserList = this.userList.asObservable();


  constructor() { }

  setUserListData(uList: IUser[]) {
    this.userList.next(uList);
  }

}
