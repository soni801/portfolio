import { Component } from '@angular/core';
import {TextTackComponent} from "../text-tack/text-tack.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TextTackComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
