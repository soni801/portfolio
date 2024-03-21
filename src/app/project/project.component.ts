import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() name: string = "Unnamed project";
  @Input() description: string | undefined;
  @Input() image: string = "https://placeholder.com/400";
}
