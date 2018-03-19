import { Directive, ViewChild, HostListener, ElementRef, Input } from '@angular/core';
import { AsYouType, CountryCode } from 'libphonenumber-js';

/**
 * Generated class for the I18nPhoneDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[i18nphone]' // Attribute selector
})
export class I18nPhoneDirective {

  @Input('countryCode') countryCode: CountryCode;

  constructor(
    public element: ElementRef,
  ) {}

  @HostListener('keyup', ['$event'])
  @HostListener('paste', ['$event'])
  onInput(e: KeyboardEvent) {
    const input = this.element.nativeElement.querySelector('input') as HTMLInputElement;
    let newValue = new AsYouType(this.countryCode).input(input.value);
    console.log(newValue[newValue.length - 1]);
    if (newValue.length && newValue[0] !== '(') {
      newValue = '(' + newValue;
    }
    if (newValue[newValue.length - 1] !== ')') {
      input.value = newValue;
    }
  
    
  }
}
