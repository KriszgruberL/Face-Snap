import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {


  $faceSnaps!: Observable<FaceSnap[]>

  constructor(private _faceService: FaceSnapsService) { }

  ngOnInit(): void {

    this.$faceSnaps = this._faceService.getAllSNaps()

    // interval(1000).pipe(
    //   // ? Quand on veut toutes les observables émise durant la vie du component
    //   // Prendre jusqu'a ce que _$destroy emette quelque chose
    //   takeUntil(this._$destroy),
    //   // ? Prend le nombre d'émission qui nous intéresse et complète l'observable
    //   // take(3),
    //   tap(console.log)
    // ).subscribe()
  }


}
