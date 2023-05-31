import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LazyLoadImagesModule } from 'ngx-lazyload-image';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplaceScreenComponent } from './main/pages/splace-screen/splace-screen.component';
import { GalleryComponent } from './main/pages/gallery/gallery.component';
import { FullScreenViewComponent } from './main/pages/full-screen-view/full-screen-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SplaceScreenComponent,
    GalleryComponent,
    FullScreenViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LazyLoadImagesModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
