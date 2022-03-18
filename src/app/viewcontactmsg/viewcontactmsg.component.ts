import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-viewcontactmsg',
  templateUrl: './viewcontactmsg.component.html',
  styleUrls: ['./viewcontactmsg.component.css']
})
export class ViewcontactmsgComponent implements OnInit {
  msg:string;
  msg1:string;
  msg2:string;

  constructor(public activeRouter:ActivatedRoute,public userSer:UsersService) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((param:Params)=>{
      if(param.userid){
        this.userSer.opencontact(param.userid).subscribe((data:any[])=>{
          this.msg=data[0].umessage;
          this.msg1=data[0].uname;
          this.msg2=data[0].usubject;
        });
      }

    });
  }
  }


