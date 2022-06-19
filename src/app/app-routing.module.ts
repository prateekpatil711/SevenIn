import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { InteriorsComponent } from './interiors/interiors.component';
import { PropertiesComponent } from './properties/properties.component';
import { GallaryComponent } from './gallary/gallary.component';

const routes: Routes = [
  { path: '' , component : HomeComponent },
  { path: 'interiors' , component: InteriorsComponent },
  { path: 'properties' , component : PropertiesComponent},
  { path: 'gallary' , component : GallaryComponent},
  { path: '**' , redirectTo : '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
