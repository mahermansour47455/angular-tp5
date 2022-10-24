import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { EquipeService } from '../services/equipe.service';
@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  newEquipe = new Equipe();
  addequipe(){
    this.equipeservices.ajouterequipe(this.newEquipe);
  }
  constructor(private equipeservices: EquipeService) { }

  ngOnInit(): void {
  }

}
