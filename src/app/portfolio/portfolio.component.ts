import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  disImage: boolean = false;



  arr: string[] = ["./assets/images/blog-1.jpg", "./assets/images/blog-2.jpg", "./assets/images/blog-3.jpg", "./assets/images/3.jpg", "./assets/images/4.jpg", "./assets/images/5.jpg", "./assets/images/6.jpg", "./assets/images/testi-1.jpg", "./assets/images/testi-2.jpg"];
  image!: string;
  getIndex(index: number) {
    console.log(this.arr[index]);
    this.image = this.arr[index];
    this.disImage = true;
  }

  toHideImage(event: any) {

    console.log(event)
    if (event.target.tagName == "IMG") {
      this.disImage = true;
    }
    else {
      this.disImage = false;
    }
  }

}
