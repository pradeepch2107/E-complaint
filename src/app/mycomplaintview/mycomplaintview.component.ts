import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-mycomplaintview',
  templateUrl: './mycomplaintview.component.html',
  styleUrls: ['./mycomplaintview.component.css']
})
export class MycomplaintviewComponent implements OnInit {

  constructor(public activeRouter:ActivatedRoute,public userSer:UsersService) { }
  msg:string;
  msg1:string;
  msg2:string;

  ngOnInit(): void {
    this.activeRouter.params.subscribe((param:Params)=>{
      if(param.userid){
        this.userSer.opencomplaint(param.userid).subscribe((data:any[])=>{
          this.msg=data[0].umessage;
          this.msg1=data[0].uname;
          this.msg2=data[0].uissue;
        });
      }
    });
  }

}
