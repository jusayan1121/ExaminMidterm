import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gallery=[
    {'id':1,'image':'../../assets/JUVY.jpg'},
    {'id':2,'image':'../../assets/PIC3.jpg'},
    {'id':3,'image':'../../assets/PIC2.jpg'},
    {'id':4,'image':'../../assets/PIC3.jpg'},
    {'id':5,'image':'../../assets/PIC5.jpg'},
    {'id':6,'image':'../../assets/PIC6.jpg'},
    {'id':7,'image':'../../assets/PIC1.jpg'},
    {'id':8,'image':'../../assets/PIC2.jpg'},
    {'id':9,'image':'../../assets/PIC3.jpg'},
    {'id':10,'image':'../../assets/PIC5.jpg'},
    {'id':11,'image':'../../assets/PIC6.jpg'},
    {'id':2,'image':'../../assets/PIC1.jpg'},

  ]
  

}
