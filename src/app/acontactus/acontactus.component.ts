import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-acontactus',
  templateUrl: './acontactus.component.html',
  styleUrls: ['./acontactus.component.css']
})
export class AcontactusComponent implements OnInit {
  users:any[]=[];
  msg:string;

  constructor(public userSer:UsersService) { }

  ngOnInit(): void {
      this.userSer.getAllcontacts().subscribe((data:any[])=>{
        this.users=data;

    },(error:any)=>{
      console.log(error);
  
      });
    
  }
  deletecontact(userid:number){

    if(confirm("Are you sure want to delete this contact"))
    {
     this.userSer.deletesinglecontact(userid).subscribe((data:string)=>{

      console.log(data);

      this.msg=data;
      var index=this.users.findIndex((obj)=>{

        return obj._id==userid;
      });
 
      this.users.splice(index,1);      

     },(error:any)=>{
      this.msg="something went wrong";
     })
    }
  }
  

}
