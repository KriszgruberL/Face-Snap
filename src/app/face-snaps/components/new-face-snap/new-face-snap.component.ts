import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  $preview!: Observable<FaceSnap>
  urlRegex! : RegExp;

  constructor(private _fb: FormBuilder,
              private _snapService : FaceSnapsService,
              private _router : Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this._fb.group({
      title: [null,[Validators.required]],
      description: [null, [Validators.required]],
      imageUrl: [null,[Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null,]
    }, {
      updateOn : 'blur'
    })

    this.$preview = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate : new Date(),
        id : 0,
        snaps : 0
      }))
    );
  }

  onSubmitForm(): void {
    this._snapService.addSnap(this.snapForm.value).pipe(
      tap(() => this._router.navigateByUrl('/facesnaps'))
    )
  }



}
