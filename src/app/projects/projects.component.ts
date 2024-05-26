import { Component, OnInit, ElementRef,ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit{
  @ViewChild('title', { static: false }) titleElement: ElementRef|any;

  ngOnInit(): void {

  }

//Animacion de titulo utilizando IntersectionObserver para detectar cuando el titulo esta en el viewport
  ngAfterViewInit(): void {

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.titleElement.nativeElement.classList.add('visible');
        } else {
          this.titleElement.nativeElement.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 });

    observer.observe(this.titleElement.nativeElement);
  }

  projects: any[] = [];
  responsiveOptions: any[] = [];


    product: any = {
        image: 'product.jpg'
    };

    constructor() {
        for(let i = 0; i < 6; i++) {
            this.projects.push(this.product);
        }

        this.responsiveOptions = [
            {
                breakpoint: '1200px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '900px',
                numVisible: 1,
                numScroll: 1
            },
        ];
    }


}
