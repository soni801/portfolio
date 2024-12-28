import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-tag',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  @Input({ required: true }) icon!: string;
}
