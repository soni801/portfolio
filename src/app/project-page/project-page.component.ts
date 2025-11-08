import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {KaffeDiemAppComponent} from "../project/kaffe-diem-app/kaffe-diem-app.component";
import {RecalSocialComponent} from "../project/recal-social/recal-social.component";

@Component({
  selector: 'app-project-page',
  imports: [
    RouterLink,
    KaffeDiemAppComponent,
    RecalSocialComponent
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {
  project: string | undefined;

  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    // Access route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.project = params['project'];
    });
  }
}
