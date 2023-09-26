import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent
{
  /**
   * Marks an element in the header as the selected element by changing its classlist
   *
   * @param event The MouseEvent of the click
   */
  select(event: MouseEvent)
  {
    // Remove 'selected' class from all links in header
    // Using querySelectorAll is probably not the best solution here, but it works well enough
    document.querySelectorAll('app-header a').forEach(e => e.classList.remove('selected'));

    // Check that the click target is an HTML element
    if (event.target instanceof HTMLElement)
    {
      // Add the 'selected' class to the clicked element
      event.target.classList.add('selected');
    }
  }
}
