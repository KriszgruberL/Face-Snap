import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token ='';

  getToken() : string {
    return this._token;
  }

  login(){
    this._token = "MyFakeToken"
  }
}
