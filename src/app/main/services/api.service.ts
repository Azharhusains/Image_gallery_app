import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getService(url: string): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      this.http.get(url).subscribe(
        res => {
          observer.next(res);
          observer.complete();
        }, err => {
          observer.next(err.error);
          observer.complete();
        }
      );
    });
  }

  deleteService(url: string, data: any): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      this.http.delete(url, data).subscribe(
        res => {
          observer.next(res);
          observer.complete();
        }, err => {
          observer.next(err.error);
          observer.complete();
        }
      );
    });
  }


}
