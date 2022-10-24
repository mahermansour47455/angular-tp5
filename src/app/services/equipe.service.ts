
import { Injectable } from '@angular/core';
import { Equipe } from '../model/equipe.model';
@Injectable({
providedIn: 'root'
})
export class EquipeService {
equipe: Equipe[]; //un tableau de equipe
constructor() {
this.equipe = [
{ id : 1, nom: "real madrid", classement:1, datematch
: new Date("01/14/2011")},
{ id: 2, nom: "psg", classement: 2, datematch
 : new Date("12/17/2010")},
{ id: 3, nom:"city", classement: 3, datematch
 : new Date("02/20/2020")}
];
}
listeEquipe():Equipe[] {
  return this.equipe;
}
ajouterequipe( e: Equipe){
  this.equipe.push(e);
  }
  supprimerequipe( prod: Equipe){
    //supprimer le produit prod du tableau equipe
    const index = this.equipe.indexOf(prod, 0);
    if (index > -1) {
    this.equipe.splice(index, 1);
    }
    //ou Bien
    /* this.equipe.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.equipe.splice(index, 1);
    }
    }); */
    }
    equipee!:Equipe;
    consulter(id:number): Equipe{
this.equipee= this.equipe.find(p => p.id == id)!;
return this.equipee;
    }

updateEquipe(p:Equipe)
{

this.supprimerequipe(p);
this.ajouterequipe(p);
}

}

  
  
