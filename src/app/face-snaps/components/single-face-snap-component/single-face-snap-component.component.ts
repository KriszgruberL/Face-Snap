import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap-component',
  templateUrl: './single-face-snap-component.component.html',
  styleUrls: ['./single-face-snap-component.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
    // "!" Promise to initialize the attributes
  $faceSnap!: Observable<FaceSnap>;
  snapped: boolean = false;

  constructor(private _faceService: FaceSnapsService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const snapId = +this._route.snapshot.params['id'];
    this.$faceSnap = this._faceService.getFaceById(snapId);
  }

  onChangeSnap(id: number) {


      this._faceService.changeSnaps(id, this.snapped).pipe(
        switchMap(() => this._faceService.getFaceById(id)), // Fetch the updated face snap
        tap(() =>
          this.$faceSnap = this._faceService.getFaceById(id),
        )
      ).subscribe();
      this.snapped = !this.snapped;
  }

}
