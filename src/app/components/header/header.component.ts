import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // class1: string = "nav-link item";
  // class2: string = "nav-link item";
  toggleNavbar = true;

  constructor() { }

  ngOnInit(): void {
  }


  AboutButtonHandler(){
    document.getElementById("about")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    // this.class2 = "nav-link item";
    // this.class1 = "nav-link item active";
  }

  ContactUsButtonHandler(){
    document.getElementById("contact")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    // this.class1 = "nav-link item";
    // this.class2 = "nav-link item active";
  }

  HomeButtonHandler(){
    document.getElementById("home")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    // this.class1 = "nav-link item";
    // this.class2 = "nav-link item";
  }

}
