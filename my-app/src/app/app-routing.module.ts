import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './block/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ContractComponent } from './pages/contract/contract.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LookbookComponent } from './pages/lookbook/lookbook.component';
import { ProductComponent } from './pages/product/product.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog-post', component: BlogPostComponent },
  { path: 'cart', component: CartComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'checkout', component: CheckOutComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'lookbook', component: LookbookComponent },
  { path: 'product', component: ProductComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
