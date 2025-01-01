import {AfterViewInit, Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {LanguageDisplayComponent} from "../language-display/language-display.component";
import {FooterComponent} from "../footer/footer.component";
import {ProjectCardComponent} from "../project-card/project-card.component";
import {AboutMeComponent} from "../about-me/about-me.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    LanguageDisplayComponent,
    FooterComponent,
    ProjectCardComponent,
    AboutMeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  showDetailedAboutMe = false;

  ngAfterViewInit(): void {
    // TODO: There must be a better way of selecting this
    const knowledgeLines = document.querySelectorAll('#knowledge div');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) this.addAnimation(knowledgeLines);
  }

  toggleAboutMe(): void {
    // Get the dialog element
    // TODO: There must be a better way of selecting this
    const dialog = document.querySelector('#about-me-fullscreen');
    if (!(dialog instanceof HTMLDialogElement)) return;

    // Toggle it
    if (this.showDetailedAboutMe) dialog.close();
    else dialog.show();
    this.showDetailedAboutMe = !this.showDetailedAboutMe;
  }

  private addAnimation(elements: NodeListOf<Element>): void {
    elements.forEach((element: Element) => {
      // Add animation attribute
      element.setAttribute('data-animated', 'true');

      // Duplicate content
      const content = Array.from(element.children);
      content.forEach(node => {
        // Clone the node
        const duplicatedNode = node.cloneNode(true);

        // Safely cast to Element
        if (duplicatedNode.nodeType !== Node.ELEMENT_NODE) return;
        const duplicatedElement = duplicatedNode as Element;

        // Add the duplicated element to the DOM
        duplicatedElement.setAttribute('aria-hidden', 'true');
        element.append(duplicatedElement);
      });
    });
  }
}
