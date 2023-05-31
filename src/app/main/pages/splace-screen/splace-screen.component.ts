import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splace-screen',
  templateUrl: './splace-screen.component.html',
  styleUrls: ['./splace-screen.component.css']
})
export class SplaceScreenComponent implements OnInit {

  constructor(
    private Router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.Router.navigate(['/gallery'])
    }, 5000);
  }

}
