import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TagComponent} from "../tag/tag.component";

type techEntry = {
  icon: string;
  reason: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
    imports: [
        NgOptimizedImage,
        TagComponent
    ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() techStack: techEntry[] = [];
  @Input() image: string = 'https://placehold.co/375x250';
}
