import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {


  userMail!: string;


  onSubmitForm(form : NgForm) : void {
    console.log(form.value);
  }
}
