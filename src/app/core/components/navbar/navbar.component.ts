import { Component } from '@angular/core';
import { Link } from '../../models/link';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {


  links: Link[] = [
    { title: 'Accueil', url: '/' },
    { title: 'Snaps', url: '/facesnaps' },
  ]

  constructor(private _router: Router) {

  }

  onAdd(): void {
    this._router.navigateByUrl('/facesnaps/create');
  }


}
