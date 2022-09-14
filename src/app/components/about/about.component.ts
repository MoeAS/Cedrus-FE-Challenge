import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { item } from 'src/app/item';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  items: item[] = [];
  error_class = "error-class-hidden"
  
  // items_loaded: boolean = false;
  // error_bool = false;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe(
      (items) => (this.items = items), 
    err => {
      //this.items_loaded = false;
      this.error_class = "error-class-visible";
    });
    
    // setTimeout(() => {
    //   if (this.itemsService.getError()) {
    //     this.items_loaded = false;
    //     this.error_class = "error-class-visible";
    //   }
    //   else { 
    //     this.items_loaded = true; 
    //     this.error_class = "error-class-hidden";
    //   }
    // }, 3000)
    
  }

}
