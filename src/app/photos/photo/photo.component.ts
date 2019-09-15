import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector : 'ap-photo',
  templateUrl : 'photo.component.html',
})
export class PhotoComponent {
  title = 'alurapic';
  // tslint:disable-next-line: max-line-length
  @Input() url = '';
  @Input() description = '';
}
