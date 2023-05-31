import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplaceScreenComponent } from './main/pages/splace-screen/splace-screen.component';
import { GalleryComponent } from './main/pages/gallery/gallery.component';
import { FullScreenViewComponent } from './main/pages/full-screen-view/full-screen-view.component';

const routes: Routes = [
  { path: '', component: SplaceScreenComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'fullscreen-view/:id', component: FullScreenViewComponent },
  {path: '**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
