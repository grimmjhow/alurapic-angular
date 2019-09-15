import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  // @Input é necessários para databing do HTML
  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

   ngOnChanges(changes: SimpleChanges): void {
     if (changes.photos) {
       console.log('entrou');
       this.rows = this.groupColumns(this.photos);
     }
  }

  groupColumns(photos: Photo[]) {

    const cols = [];

    for ( let index = 0; index < photos.length; index = + 3 ) {
      cols.push(photos.slice(index, index + 3));
    }

    return cols;
  }

}
