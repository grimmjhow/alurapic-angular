import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const username = this.activatedRoute.snapshot.params.userName;
    this.photoService.listFromUser(username)
                     .subscribe({ next: photos => { this.photos = photos; } });
  }

}
