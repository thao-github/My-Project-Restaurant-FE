import { Component, OnInit } from '@angular/core';
import {DishesService} from "../../service/dishes.service";
import {Dishes} from "../../model/Dishes";

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  dishes: Dishes[] = [];
  token!: string;


  constructor(private dishesService: DishesService) {
  }

  ngOnInit(): void {
    this.getAll();
    // @ts-ignore
    this.token = window.sessionStorage.getItem('token');
  }

  getAll() {
    this.dishesService.getDishes().subscribe((dishes) => {
      this.dishes = dishes;
    })
  }

}
