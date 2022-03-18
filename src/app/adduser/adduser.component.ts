import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  msg:string;
  usernameAvail=false;
  constructor(public userser:UsersService) { }
  ngOnInit(): void {
  }
  addusers(form:NgForm){
    this.userser.userregistration(form.value).subscribe((data:string)=>{
      console.log(data);
      this.msg=data;
    },(error:any)=>{
        console.log(error);
        this.msg="something went wrong";
    }
    );
  }

  usernamecheck(uname:string){
    this.userser.usernameAvailability(uname).subscribe((data:any[])=>{
      if(data.length==0){
        this.msg="username Avaialable";
        this.usernameAvail=true;
      }
      else{
        this.msg="username already taken";
        this.usernameAvail=false;
      }

    },(error:any)=>{
      console.log(error);
    });
  }

}
