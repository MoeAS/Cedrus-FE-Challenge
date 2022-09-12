import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  description: string = "At Cedrus, we are developing a smart software, to lower the burden of clinical data collection, predict patient outcomes and optimize the performance of joint replacement surgeries.";
  inc_text: string = "Cedrus Inc. products are in development. They are not yet marketed/registered in the United States or elsewhere.";

  constructor() { }

  ngOnInit(): void {
  }

  ContactUsButtonHandler(){
    document.getElementById("contact")!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
