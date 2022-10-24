import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipeComponent } from './equipe/equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    AddEquipeComponent,
    UpdateProduitComponent,
    UpdateEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
