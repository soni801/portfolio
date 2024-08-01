import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {LanguageDisplayComponent} from "../language-display/language-display.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    LanguageDisplayComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
