import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  

  constructor(public http:HttpClient) { }
  userregistration(data:any){
    return this.http.post<string>("http://localhost:3000/register",data);
  }
  userlogin(data:any){
    return this.http.post<any[]>("http://localhost:3000/login",data);
  }
  wantuserid(){
    return localStorage.getItem("loggeduser");
  }

  isLoggedIn(){
    return !!localStorage.getItem("loggeduser"); 
  }
 

  getAllUsers(){
    return this.http.get<any[]>("http://localhost:3000/allusers");
  }

  usernameAvailability(uname:string){
    return this.http.get<any[]>("http://localhost:3000/usernamecheck/"+uname);
  }
  
  transfercomplaint(data:any,requestedby:any){
    data.requestedby=requestedby;  
    return this.http.post<any[]>("http://localhost:3000/transcomplaint",data);
  }
  

  receivecomplaint(){
    return this.http.get<any[]>("http://localhost:3000/reccomplaint");
  }

  opencomplaint(userid:string){
    return this.http.get<any[]>("http://localhost:3000/getcomplaint/"+userid);
  }

  sendcontact(data:any){
    return this.http.post<any[]>("http://localhost:3000/sendcontact",data);
  }

  getAllcontacts(){
    return this.http.get<any[]>("http://localhost:3000/getallcontacts");
  }
  opencontact(userid:string){
    return this.http.get<any[]>("http://localhost:3000/opencontact/"+userid);
  }

  deletesinglecomplaintdata(userid:number){
    return this.http.delete<string>("http://localhost:3000/deletecomplaint/"+userid);

  }
  deletesinglecontact(userid:number){
    return this.http.delete<string>("http://localhost:3000/deletecontact/"+userid);
  }
  searchcomplaint(search:string){
    return this.http.get<any[]>("http://localhost:3000/search/"+search);

  }
  searchuser(search:string){
    return this.http.get<any[]>("http://localhost:3000/searchuser/"+search);
  }
  mycomplaints(userid:any){
    return this.http.get<any[]>("http://localhost:3000/mycomplaints/"+userid);
  }
  openmycomplaint(userid:string){
    return this.http.get<any[]>("http://localhost:3000/openmycomplaint/"+userid);

  }

  savestatus(data:any){
    return this.http.post<any[]>("http://localhost:3000/savestatus",data);
  }
  receivestatus(userid:any){
    return this.http.get<any[]>("http://localhost:3000/receivestatus/"+userid);
  }
  
  
  
}
