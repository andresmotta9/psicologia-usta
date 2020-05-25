import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadComponent } from './components/download/download.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  {path:'download', component: DownloadComponent},
  {path:'home', component: InfoComponent},
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path:'**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }