import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(public userSer:UsersService) { }

  ngOnInit(): void {
    
  }
  getUserId(){
    return this.userSer.wantuserid();
  }
  isadmin(){
    let Role=localStorage.getItem("usertype");
    if(Role=="admin"){
      return true;
    }
    else{
      return false;
    } 
  }
  
  
 
  

}
