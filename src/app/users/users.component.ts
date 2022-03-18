import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public userSer:UsersService) { }
  users:any[]=[];

  ngOnInit(): void {
    this.userSer.getAllUsers().subscribe((data:any[])=>{
      this.users=data;

    },(error:any)=>{
      console.log(error);
    });
  }
  dosearch(search:string){
    this.userSer.searchuser(search).subscribe((data:any[])=>{
      this.users=data;

    });

  }

}



