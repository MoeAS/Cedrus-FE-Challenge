import { Component, Input, OnInit } from '@angular/core';
import {item} from '../../item';
import { Items } from 'src/app/mock-items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() img: string;
  @Input() title: string;
  @Input() description: string;

  

  constructor() { }

  ngOnInit(): void {
  }

}
