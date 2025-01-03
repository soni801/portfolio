import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) tooltip!: string;
}
