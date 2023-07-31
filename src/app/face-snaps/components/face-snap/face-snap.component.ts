import {Component, Input} from '@angular/core';
import {FaceSnap} from '../../../core/models/face-snap.model';
import {FaceSnapsService} from '../../../core/services/face-snaps.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent {

  constructor(private _faceService: FaceSnapsService,
              private _router: Router) {

  }

  @Input() faceSnap!: FaceSnap

  // "!" Promise to initialize the attributes
  snapped: boolean = false;

  onChangeSnap() {
    this._faceService.changeSnaps(this.faceSnap.id, this.snapped);
    this.snapped = !this.snapped;
  }

  onView() {
    this._router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }


}
