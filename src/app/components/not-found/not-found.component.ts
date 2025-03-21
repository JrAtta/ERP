import { Component, inject, TRANSLATIONS } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  private _Router = inject(Router)

  gotoHome(){
    this._Router.navigate(['/main'])
  }
}
