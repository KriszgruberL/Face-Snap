import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaceSnapComponent} from "./components/face-snap/face-snap.component";
import {FaceSnapListComponent} from "./components/face-snap-list/face-snap-list.component";
import {SingleFaceSnapComponent} from "./components/single-face-snap-component/single-face-snap-component.component";
import {NewFaceSnapComponent} from "./components/new-face-snap/new-face-snap.component";
import {ReactiveFormsModule} from "@angular/forms";
import { FaceSnapsRoutingModule } from './face-snaps-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule,
    HttpClientModule,
  ],
  exports : [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent,
  ]
})
export class FaceSnapsModule { }

