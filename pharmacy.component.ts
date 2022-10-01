import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {

  i1:string="./assets/photos/d1.jpg";
  i2:string="./assets/photos/d2c.jpg";
  i3:string="./assets/photos/d3c.jpg";
  i4:string="./assets/photos/d4c.jpg";
  i5:string="./assets/photos/d5c.jpg";
  i6:string="./assets/photos/d6c.jpg";
  i7:string="./assets/photos/d7c.jpg";
  i8:string="./assets/photos/d8c.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
