import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./register-login/register/register.component";
import {HomeComponent} from "./home/home.component";
import {LogInComponent} from "./register-login/log-in/log-in.component";
import {OrderComponent} from "./order/order.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LogInComponent, data: {title: 'Login'}},
  {path: 'order/:id', component: OrderComponent, data: {title: 'Order'}},

  {path: 'dishes', loadChildren: () => import('./dishes/dishes.module').then(module => module.DishesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
