import { TabloaderComponent } from './tabloader/tabloader.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { ParticipantsComponent } from './participants/participants.component';
import { SessionsComponent } from './sessions/sessions.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'formateurs',
  component: FormateursComponent
},
{ path: 'participants', 
component: ParticipantsComponent
 },
{ 
  path: 'sessions', 
component: SessionsComponent },
{ path: 'tabloader',
component: TabloaderComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
