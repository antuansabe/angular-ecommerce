import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent} from './components/product.component';
import { CartComponent } from './cart/cart.component';
import { ExponentialPipe } from './exponential.pipe';
import { HomeModule } from './home/home.module';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


