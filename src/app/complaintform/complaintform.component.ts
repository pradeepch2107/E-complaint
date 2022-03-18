import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-complaintform',
  templateUrl: './complaintform.component.html',
  styleUrls: ['./complaintform.component.css']
})
export class ComplaintformComponent implements OnInit {
  msg:string;
  showalert:boolean=false;
  requestedby:any;
  constructor(public userSer:UsersService) { }

  ngOnInit(): void {
  }
  
  doregister(form:NgForm){
   const requestedby= this.userSer.wantuserid();
    this.userSer.transfercomplaint(form.value,requestedby).subscribe((data:any)=>{
      this.showalert=true;
      this.msg=data;
    },(error:any)=>{
      this.msg="error in registering the complaint";
    }); 
    
  }
  

}
