import { Component, OnInit } from '@angular/core';
import { Observable, concatMap, delay, exhaustMap, filter, interval, map, mergeMap, of, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  $interval!: Observable<string>;

  // Observable haut niveau -> observable composite / observable souscrite à d'autres observables
  // mergeMap -> mise en parallèle, souscrit à l'Observable intérieur sans se soucier si l'Observable intérieur précédemment souscrit a complété ou non, 
  // * On utilisera mergeMap quand l'ordre des souscriptions n'a pas besoin d'être conservé.
  // concatMap -> Assurer la mise en série et les exécute sequentiellement
  // * On utilisera concatMap quand l'ordre des opérations doit être conservé. 
  // exhaustMap ->  Ignore les nouvelles valeurs tant que l'observable en cours n'est pas complet.
  // * On utilisera exhaustMap quand un événement doit être entièrement traité avant de permettre à d'autres événements d'être émis.
  // switchMap -> Annule l'observable en cours et passe à la dernière valeur émise, permettant de traiter uniquement les valeurs les plus récentes.
  // * On utilisera switchMap quand la dernière émission de l'Observable extérieur est celle qui nous intéresse.


  ngOnInit(): void {
    this.$interval = interval(1000).pipe(
      // ! L'ordre est important, l'emission est changée par filter et map
      // filter filtre
      filter(value => value % 3 === 0),
      // map transforme les émissions des observables
      map(value => value % 2 === 0 ? `${value} is even ` : `${value} is odd`),
      //tap produit un side effect et sort de l'observable sans toucher à l'émission
      tap(text => this.logger(text))
    );
  }


  logger(text: string) {
    console.log(`log : ${text}`);
  }

}

