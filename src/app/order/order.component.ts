import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReservationForm} from "../model/ReservationForm";
import {Dishes} from "../model/Dishes";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DishesService} from "../service/dishes.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  dish!: Dishes;
  id!: number;
  quantity: number = 1;
  totalPrice!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private dishesService: DishesService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
    })
  }

  ngOnInit(): void {
    this.findDishById(this.id);
  }

  findDishById(id: number) {
    this.dishesService.findById(id).subscribe((data) => {
      this.dish = data;
      this.totalPrice = this.dish.price * this.quantity;

    })
  }


  plus() {
    this.quantity += 1;
    this.totalPrice = this.dish.price * this.quantity;

  }

  minus() {
    if (this.quantity <= 1) {
      this.quantity = 1;
    } else {
      this.quantity -= 1;
    }
    this.totalPrice = this.dish.price * this.quantity;


  }
}
