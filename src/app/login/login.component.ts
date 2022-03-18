import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userser:UsersService,public nav:Router,) {}
  msg:any;
  showalert:boolean=false;
  ngOnInit(): void {
    
  }
  dologin(form:NgForm){
    this.userser.userlogin(form.value).subscribe((data:any[])=>{
      console.log(data);
      if(data.length==0){
        this.msg="invalid login";
        this.showalert=true;
      }
      else{
        localStorage.setItem("loggeduser",data[0]._id);
        data[0].uname=="Adminuser"?localStorage.setItem('usertype','admin'):localStorage.setItem('usertype','user');
        this.nav.navigateByUrl("/complaint/:userid");
      }

    },(error)=>{
      console.log(error);
    }); 

  }

}
