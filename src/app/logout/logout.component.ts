import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public myRouter:Router) { }

  ngOnInit(): void {
  }
  dologout(){
    localStorage.clear();
    this.myRouter.navigateByUrl("/");
  }

}
