import { Component, NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersmanagementComponent } from './usersmanagement/usersmanagement.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { LogoutComponent } from './logout/logout.component';
import { ComplaintformComponent } from './complaintform/complaintform.component';
import { ViewcomplaintComponent } from './viewcomplaint/viewcomplaint.component';
import { MycomplaintsComponent } from './mycomplaints/mycomplaints.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AcontactusComponent } from './acontactus/acontactus.component';
import { ViewcontactmsgComponent } from './viewcontactmsg/viewcontactmsg.component';
import { MycomplaintviewComponent } from './mycomplaintview/mycomplaintview.component';
import { RoleGuard } from './role.guard';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"usersmanagement/:userid",component:UsersmanagementComponent,canActivate:[AuthGuard&&RoleGuard]},
  {path:"users",component:UsersComponent,canActivate:[AuthGuard&&RoleGuard]},
  {path:"viewcomplaint/:userid",component:ViewcomplaintComponent,canActivate:[AuthGuard]},
  {path:"mycomplaints/:userid",component:MycomplaintsComponent,canActivate:[AuthGuard]},
  {path:"contactus",component:ContactusComponent,canActivate:[AuthGuard]},
  {path:"mycomplaintview/:userid",component:MycomplaintviewComponent,canActivate:[AuthGuard]},
  {path:"acontactus",component:AcontactusComponent,canActivate:[AuthGuard&&RoleGuard]},
  {path:"viewcontactmsg/:userid",component:ViewcontactmsgComponent,canActivate:[AuthGuard]},
  {path:"complaint/:userid",component:ComplaintformComponent,canActivate:[AuthGuard]},
  {path:"viewstatus/:userid",component:ViewstatusComponent,canActivate:[AuthGuard]},
  {path:"logout",component:LogoutComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
