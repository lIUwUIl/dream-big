import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public count: number = 1;
  public label: string = "To admin page"

  constructor() { }

  ngOnInit(): void {
  }

}