import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-mycomplaints',
  templateUrl: './mycomplaints.component.html',
  styleUrls: ['./mycomplaints.component.css']
})
export class MycomplaintsComponent implements OnInit {
  mycomplaints:any[]=[];
  constructor(public user:UsersService,public activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((param:Params)=>{
      if(param.userid){
        this.user.mycomplaints(param.userid).subscribe((data:any[])=>{
          this.mycomplaints=data;
        });
      }

    });
  }
 

}
