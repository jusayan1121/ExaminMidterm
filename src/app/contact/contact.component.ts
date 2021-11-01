import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contact= [
    
    {'id':1,'name':'Facebook Account','description':'Username:Juvelyn JUsayan','image':'../../assets/fb.png'},
    {'id':2,'name': 'Gmail Account','description':'Email:juvelyn.jusayan@evsu.edu.ph','image':'../../assets/gmail.png'},
    {'id':3,'name':'Instagram Account','description':'Username:Juvy03225','image':'../../assets/insta.jfif'},
    {'id':4,'name':'Call or Text','description':'Number: 09518515863','image':'../../assets/download.png'},
  
  ]

}
