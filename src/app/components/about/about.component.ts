import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { item } from 'src/app/item';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  items: item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe((items) => (this.items = items));
  }

}
