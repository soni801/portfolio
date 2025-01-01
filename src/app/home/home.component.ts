import {AfterViewInit, Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {LanguageDisplayComponent} from "../language-display/language-display.component";
import {FooterComponent} from "../footer/footer.component";
import {ProjectCardComponent} from "../project-card/project-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    LanguageDisplayComponent,
    FooterComponent,
    ProjectCardComponent
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

  toggleAboutMe(event: Event): void {
    // Make sure the event target is valid
    if (!(event.target instanceof HTMLElement)) return;

    if (this.showDetailedAboutMe) {
      // Remove popup text node
      const fullscreenElement = document.querySelector('#about-me-fullscreen');
      if (fullscreenElement) fullscreenElement.remove();

      // Hide close button
      const closeButton = document.querySelector('#about-me button');
      if (closeButton) closeButton.classList.remove('visible');
      this.showDetailedAboutMe = false;
    } else {
      // Create popup text node
      const clone = event.target.cloneNode(true) as HTMLElement;
      clone.id = 'about-me-fullscreen';
      document.body.append(clone);

      // Show close button
      const closeButton = document.querySelector('#about-me button');
      if (closeButton) closeButton.className = 'visible';
      this.showDetailedAboutMe = true;
    }
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
