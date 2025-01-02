import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-tack',
  imports: [],
  templateUrl: './text-tack.component.html',
  styleUrl: './text-tack.component.scss'
})
export class TextTackComponent {
  // Normal inputs
  @Input() icon: string = 'close';
  @Input({ required: true }) text!: string;
  @Input() href: string = '/';

  // Devicon input
  protected _devicon: boolean = false;
  @Input()
  get devicon() { return this._devicon; }
  set devicon(value: any) { this._devicon = this.coerceBooleanProperty(value); }

  // External input
  protected _external: boolean = false;
  @Input()
  get external() { return this._external; }
  set external(value: any) { this._external = this.coerceBooleanProperty(value); }

  /**
   * Coerces a data-bound value (typically a string) to a boolean.
   *
   * @see https://stackoverflow.com/a/46523651
   */
  private coerceBooleanProperty(value: any): boolean {
    return value != null && value !== 'false';
  }
}
