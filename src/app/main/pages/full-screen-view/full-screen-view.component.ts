import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { environmenturl } from 'src/environments/environment.prod';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-full-screen-view',
  templateUrl: './full-screen-view.component.html',
  styleUrls: ['./full-screen-view.component.css']
})
export class FullScreenViewComponent implements OnInit {

  private APIBaseURL = environmenturl.BaseUrl;
  selectedPhoto: any;
  id:any
  constructor(
    private ActiveRoute: ActivatedRoute, 
    private apiService: ApiService,
    private Router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.spinner.show()
   this.id = Number(this.ActiveRoute.snapshot.paramMap.get('id'));
   this.ViewSinglePhoto()
  }

  ViewSinglePhoto(){
    this.apiService.getService(`${this.APIBaseURL}/${this.id}`).subscribe((data: any) => {
      this.spinner.hide()
      this.selectedPhoto = data;
      console.log(this.selectedPhoto)
    });
  }

  closeFullscreen(): void {
    this.Router.navigate(['/gallery']);
  }

  shareImage(imageUrl: string): void {
    if (navigator.share) {
      navigator.share({
        title: 'Image Sharing',
        text: 'Check out this image!',
        url: imageUrl,
      })
        .then(() => this.toastr.success('Image shared successfully'))
        .catch((error) => this.toastr.error('Error sharing image'));
    } else {
      console.warn('Image sharing not supported in this browser.');
    }
  }
  

}
