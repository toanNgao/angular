import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './block/footer/footer.component';
import { HeaderComponent } from './block/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContractComponent } from './pages/contract/contract.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { LookbookComponent } from './pages/lookbook/lookbook.component';
import { ErrorComponent } from './pages/error/error.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductComponent } from './pages/product/product.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    ContractComponent,
    CartComponent,
    CheckOutComponent,
    WishlistComponent,
    LookbookComponent,
    ErrorComponent,
    CategoryComponent,
    ProductComponent,
    BlogsComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
