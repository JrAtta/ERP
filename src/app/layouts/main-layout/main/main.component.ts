import { Component } from '@angular/core';
import { NavBarComponent } from "../../../components/nav-bar/nav-bar.component";
import { SideBarComponent } from "../../../components/side-bar/side-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent,RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
