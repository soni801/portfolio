import {AfterViewInit, Component} from '@angular/core';
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
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // TODO: There must be a better way of selecting this
    const knowledgeLines = document.querySelectorAll('#knowledge div');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) this.addAnimation(knowledgeLines);
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
