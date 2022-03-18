import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersmanagementComponent } from './usersmanagement/usersmanagement.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LogoutComponent } from './logout/logout.component';
import { ComplaintformComponent } from './complaintform/complaintform.component';
import { ViewcomplaintComponent } from './viewcomplaint/viewcomplaint.component';
import { MycomplaintsComponent } from './mycomplaints/mycomplaints.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AcontactusComponent } from './acontactus/acontactus.component';
import { ViewcontactmsgComponent } from './viewcontactmsg/viewcontactmsg.component';
import { MycomplaintviewComponent } from './mycomplaintview/mycomplaintview.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersmanagementComponent,
    HeaderComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    LogoutComponent,
    ComplaintformComponent,
    ViewcomplaintComponent,
    MycomplaintsComponent,
    ContactusComponent,
    AcontactusComponent,
    ViewcontactmsgComponent,
    MycomplaintviewComponent,
    ViewstatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
