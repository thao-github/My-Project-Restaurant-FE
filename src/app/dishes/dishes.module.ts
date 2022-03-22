import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import {DishesListComponent} from "./dishes-list/dishes-list.component";
import { DishesAddComponent } from './dishes-add/dishes-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { DishesEditComponent } from './dishes-edit/dishes-edit.component';
import { DishesDeleteComponent } from './dishes-delete/dishes-delete.component';


@NgModule({
  declarations: [
    DishesListComponent,
    DishesAddComponent,
    DishesEditComponent,
    DishesDeleteComponent,
  ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,

  ]
})
export class DishesModule { }
