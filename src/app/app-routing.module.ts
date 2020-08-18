import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { WishlistComponent } from './wishlist/wishlist.component';
import { ShoppingbagComponent } from './shoppingbag/shoppingbag.component';

import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { RoadsterComponent } from './roadster/roadster.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"",component:HomeComponent},

  {path:"wishlist",component:WishlistComponent},
  {path:"shoppingbag",component:ShoppingbagComponent},
  {path:"men-tshirts",component:TShirtsComponent},
  {path:"tshirts-roadster",component:RoadsterComponent},
  {path:"login",component:LoginComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
