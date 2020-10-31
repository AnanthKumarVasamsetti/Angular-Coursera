import { Component, OnInit, Input } from '@angular/core';
import {Dish} from '../shared/dish';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
    @Input()
    dish: Dish;
  constructor() { }

  ngOnInit() {
  }

}
