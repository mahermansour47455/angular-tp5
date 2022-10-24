import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  EquipeComponent } from './equipe/equipe.component';
import {AddEquipeComponent} from './add-equipe/add-equipe.component'
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';

const routes: Routes = [
  {path:"equipe",component:EquipeComponent},
  {path:"add-equipe",component:AddEquipeComponent},
  {path:"" ,redirectTo:"equipe",pathMatch:"full"},
  {path:"update-equipe/:id",component:UpdateEquipeComponent}

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
