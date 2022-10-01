import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  d1:string="./assets/photos/doc1.jpeg"

  constructor() { }

  ngOnInit(): void {
  }

}
