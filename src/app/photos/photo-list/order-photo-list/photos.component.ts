import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ap-ordered-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {
  // @Input é necessários para databing do HTML
  @Input() photos: Photo[] = [];
  rows: Photo[] = [];

  constructor() { }

   ngOnChanges(changes: SimpleChanges): void {
     if (changes.photos) {
       console.log('The photo component changed');
       this.rows = this.partitionList(this.photos, 3);
     }
  }

  partitionList(list: any[], partitionSize: number ) {
    const cols = [];
    let total = 0;

    list.forEach( (index, value) => {
      const partition = list.slice(total, total + 3);
      if ( this.isArrayEmpty(partition) ) {
        return cols;
      }

      cols.push(partition);
      total = total + 3;
    });
    return cols;
  }

  /**
   * Verify with an array is empty or not
   * @param array valid array
   */
  isArrayEmpty(array: any[]): boolean {
    return (array === undefined || array.length === 0) ? true : false;
  }

}
