import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryRef } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleryId = 'gallery';

  constructor(private gallery: Gallery) {}

  ngOnInit() {
    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

    galleryRef.addImage({
      src: './assets/images/gallery/1.png',
      thumb: './assets/images/gallery/1.png',
    });

    galleryRef.addImage({
      src: './assets/images/gallery/2.png',
      thumb: './assets/images/gallery/2.png',
    });

    galleryRef.addImage({
      src: './assets/images/gallery/4.png',
      thumb: './assets/images/gallery/4.png',
    });

    galleryRef.addYoutube({
      src: 'bSRZ9gFM8OE',
    });

    galleryRef.addImage({
      src: './assets/images/gallery/5.png',
      thumb: './assets/images/gallery/5.png',
    });

    galleryRef.addImage({
      src: './assets/images/gallery/6.png',
      thumb: './assets/images/gallery/6.png',
    });

    galleryRef.addYoutube({
      src: 'ES4k_qr-erU',
    });

    galleryRef.addImage({
      src: './assets/images/gallery/3.png',
      thumb: './assets/images/gallery/3.png',
    });
  }
}
