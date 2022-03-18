import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-usersmanagement',
  templateUrl: './usersmanagement.component.html',
  styleUrls: ['./usersmanagement.component.css']
})
export class UsersmanagementComponent implements OnInit {

  users:any[]=[];
  msg:string;
  msg1:string;
  msg2:string;
  msg3:string;
  status1:string;
  data1:any;
  data2:any;
 
  
  

  constructor(public userSer:UsersService,public activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.userSer.receivecomplaint().subscribe((data:any[])=>{
      this.users=data;
    },(error:any)=>{
      console.log(error);
      this.msg="something went wrong";

    });
    
  }
  deletecomplaint(userid:number){

    if(confirm("Are you sure want to delete this complaint"))
    {
     this.userSer.deletesinglecomplaintdata(userid).subscribe((data:string)=>{

      console.log(data);

      this.msg1=data;
      var index=this.users.findIndex((obj)=>{

        return obj._id==userid;
      });
 
      this.users.splice(index,1);      

     },(error:any)=>{
      this.msg1="something went wrong";
     });
    }
  }

  dosearch(search:string){
    this.userSer.searchcomplaint(search).subscribe((data:any[])=>{
      this.users=data;

    });

  }
  updatestatus(form:NgForm){
    this.userSer.savestatus(form.value).subscribe((data:any)=>{
      this.data2=data;
    },(error:any)=>{
        console.log(error);
        this.msg2="something went wrong";
    }
    );
    
  }
  
  
  



}
