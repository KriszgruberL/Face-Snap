import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private _http: HttpClient) { }

  snapped: boolean = false;


  getAllSNaps(): Observable<FaceSnap[]> {
    return this._http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceById(id: number): Observable<FaceSnap> {
    return this._http.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`)
  }

  changeSnaps(id: number, snapped : boolean): Observable<FaceSnap> {
    this.toggleSnap();
    return this.getFaceById(id).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps : faceSnap.snaps + (!snapped ? 1 : -1),
      })),
      switchMap(updatedFaceSnap => this._http.put<FaceSnap>(`http://localhost:3000/facesnaps/${id}`, updatedFaceSnap))
      )
  }

  toggleSnap() {
    this.snapped = !this.snapped;
  }

  addSnap(formValue: { title: string, description: string, imageUrl: string, location?: string })  :Observable<FaceSnap> {
    
    return this.getAllSNaps().pipe(
      map(snap => [...snap].sort((a,b) => a.id - b.id)),
      map(sortedSnap => sortedSnap[sortedSnap.length -1]),
      map(previousSnap => ({
        ...formValue,
        snaps : 0,
        createdDate : new Date(),
        id : previousSnap.id + 1
      })),
      switchMap(newSnap => this._http.post<FaceSnap>('http://localhost:3000/facesnaps', newSnap))
    )
  }

}
