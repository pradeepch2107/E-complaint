import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  msg:string;
  showalert:boolean=false;
  constructor(public userSer:UsersService) { }

  ngOnInit(): void {
  }
  docontact(form:NgForm){
    this.userSer.sendcontact(form.value).subscribe((data:any)=>{
      this.msg=data;
      this.showalert=true;
    },(error:any)=>{
      this.msg="error in requesting the contact";
    });

  }


}
