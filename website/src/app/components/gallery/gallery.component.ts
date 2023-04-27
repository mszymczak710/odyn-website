import { Component } from '@angular/core';
import { Gallery, GalleryRef } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  galleryId = 'gallery';

  constructor(private gallery: Gallery) {}

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

    galleryRef.addImage({
      src: '/assets/images/gallery/1.png',
      thumb: '/assets/images/gallery/1.png',
    });

    galleryRef.addImage({
      src: '/assets/images/gallery/2.png',
      thumb: '/assets/images/gallery/2.png',
    });

    galleryRef.addImage({
      src: '/assets/images/gallery/3.png',
      thumb: '/assets/images/gallery/3.png',
    });

    galleryRef.addYoutube({
      src: 'bSRZ9gFM8OE',
    });
  }
}
