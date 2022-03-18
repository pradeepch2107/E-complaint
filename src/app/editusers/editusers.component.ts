import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params} from '@angular/router';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})
export class EditusersComponent implements OnInit {

  constructor(public activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param:Params)=>{

    });
  }

}
