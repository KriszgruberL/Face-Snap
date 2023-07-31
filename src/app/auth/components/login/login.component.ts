import {Component} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _authService: AuthService,
              private _router: Router) {
  }

  onLogin(): void {
    this._authService.login();
    this._router.navigateByUrl('/facesnaps')
  }
}
