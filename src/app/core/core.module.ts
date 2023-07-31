import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {httpInterceptorProviders} from "./interceptors";
import {FooterComponent} from "./components/footer/footer.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import { RouterModule } from '@angular/router';
import * as fr from '@angular/common/locales/fr';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    FooterComponent,
    NavbarComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders,

  ],
  
})
export class CoreModule {
  constructor(){
    registerLocaleData(fr.default);
  }

}
