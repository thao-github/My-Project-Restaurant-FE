import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 token!: string;
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.token = window.sessionStorage.getItem('token');
  }

  logOut() {
    window.sessionStorage.clear();
    window.location.reload();
  }
}
