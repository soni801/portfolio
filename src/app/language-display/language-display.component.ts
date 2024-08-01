import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-language-display',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './language-display.component.html',
  styleUrl: './language-display.component.scss'
})
export class LanguageDisplayComponent {
  @Input() name: string = 'Unnamed language';
  @Input({ required: true }) deviconId!: string;
}
