import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg:string;
  usernameAvail=false;
  showalert:boolean=false;
  constructor(public userser:UsersService) { }

  ngOnInit(): void {
  }
  doregistration(form:NgForm){
    console.log(form.value);
    this.userser.userregistration(form.value).subscribe((data:string)=>{
      console.log(data);
      this.msg=data;
      this.showalert=true;
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
