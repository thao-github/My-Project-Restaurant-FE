import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Dishes} from "../../model/Dishes";
import {DishesService} from "../../service/dishes.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";

@Component({
  selector: 'app-dishes-delete',
  templateUrl: './dishes-delete.component.html',
  styleUrls: ['./dishes-delete.component.css']
})
export class DishesDeleteComponent implements OnInit {
  dishForm!: FormGroup;
  id!: number;
  status: any;

  constructor(private dishService: DishesService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.findById(this.id);
    })
  }

  ngOnInit(): void {
  }


  findById(id: number){
    return this.dishService.findById(id).subscribe((dish) =>{
      console.log(dish);
      this.dishForm = new FormGroup({
        'id': new FormControl(dish.id),
        'name': new FormControl(dish.name),
        'price': new FormControl(dish.price),
        'description': new FormControl(dish.description),
        'img': new FormControl(dish.img),
      })
    });
  }


  delete(id: number) {

  }
}
