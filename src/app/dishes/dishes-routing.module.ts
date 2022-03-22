import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DishesListComponent} from "./dishes-list/dishes-list.component";
import {DishesAddComponent} from "./dishes-add/dishes-add.component";
import {DishesEditComponent} from "./dishes-edit/dishes-edit.component";
import {DishesDeleteComponent} from "./dishes-delete/dishes-delete.component";

const routes: Routes = [
  {path: "", component: DishesListComponent},
  {path: "add", component: DishesAddComponent},
  {path: "edit/:id", component: DishesEditComponent},
  {path: "delete/:id", component: DishesDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule { }
