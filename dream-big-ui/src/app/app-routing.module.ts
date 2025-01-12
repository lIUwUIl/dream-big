import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StarControlComponent } from './Components/StarControl/star-control.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AvatarBuilderComponent } from './Components/avatar-builder/avatar-builder.component';

import { IntroPageComponent } from './Components/intro-page/intro-page.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { StarMapComponent } from './Components/StarMap/star-map.component';
import { AuthGuard } from './services/authguard.service';

const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'intro', canActivate: [AuthGuard], component: IntroPageComponent},
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'home', canActivate: [AuthGuard], component: LandingPageComponent }, 
  { path: 'star', canActivate: [AuthGuard], component: StarControlComponent },
  { path: 'avatar-builder', canActivate: [AuthGuard], component: AvatarBuilderComponent },
  { path: 'admin', canActivate: [AuthGuard], loadChildren: adminModule },
  { path: 'star-map', component: StarMapComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
