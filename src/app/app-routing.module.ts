import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearningPlanComponent } from './learning-plan/learning-plan.component';
import { ResourcesComponent } from './resources/resources.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [


  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent } ,
  { path: 'Classes', component: ClassesComponent },
  { path: 'Learing_Plan', component: LearningPlanComponent } ,
  { path: 'Resources', component: ResourcesComponent },
  { path: 'Chat', component: ChatComponent } ,
  { path: 'Settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
