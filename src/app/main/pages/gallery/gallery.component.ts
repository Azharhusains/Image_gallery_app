import { Component, HostListener, OnInit } from '@angular/core';
import { environmenturl } from 'src/environments/environment.prod';
import { ApiService } from '../../services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  
  @HostListener('window:scroll')

  private APIBaseURL = environmenturl.BaseUrl;
  PhotoList: any;

  page = 1;
  pageSize = 10;

  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private Router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.spinner.show()
    this.getPhotosList();
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  getPhotosList(): void {
    const url = `${this.APIBaseURL}?_page=${this.page}&_limit=${this.pageSize}`;
    this.apiService.getService(url).subscribe(
      (res: any) => {
        this.spinner.hide()
        console.log(res);
        this.PhotoList = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = scrollTop + windowHeight;

    if (windowBottom >= docHeight) {
      this.spinner.hide()
      this.page++;
      this.getPhotosList();
    }
  }
  
  

selectedPhotos: any[] = [];

toggleSelection(photoId: number): void {
  const index = this.selectedPhotos.indexOf(photoId);
  if (index > -1) {
    this.selectedPhotos.splice(index, 1);
  } else {
    this.selectedPhotos.push(photoId);
  }
}

deleteSelectedPhotos(): void {
  for (let photoId of this.selectedPhotos) {
    this.apiService.deleteService(`${this.APIBaseURL}/${photoId}`,photoId).subscribe(
      (res:any) =>{
        document.getElementById('close')?.click
        console.log(res)
        console.log('Deleting photo with ID:', photoId);
        this.toastr.success('Images deleted successfully')
        this.getPhotosList()
        photoId = 0
        this.selectedPhotos.length = 0
      },(err:any) =>{
        console.log(err)
        this.toastr.error('something went wrong')
      }
    )
  
  }
}





openFullscreen(id: number): void {
  console.log(id);
  this.Router.navigate(['/fullscreen-view', id]);
}


}
