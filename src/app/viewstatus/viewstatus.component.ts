import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.component.html',
  styleUrls: ['./viewstatus.component.css']
})
export class ViewstatusComponent implements OnInit {

  constructor(public user:UsersService,public activeRouter:ActivatedRoute) { }
  status:any;


  ngOnInit(): void {
    this.activeRouter.params.subscribe((param:Params)=>{
      if(param.userid){
        this.user.receivestatus(param.userid).subscribe((data:any[])=>{
          this.status=data[0].ustatus;
          
        });
      }

    });

    
  }

}
