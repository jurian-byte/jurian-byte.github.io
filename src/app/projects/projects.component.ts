import { Component, OnInit, ElementRef,ViewChild, AfterViewInit} from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit{
  @ViewChild('title', { static: false }) titleElement: ElementRef|any;

  ngOnInit(): void {

  }
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




    constructor() {

      this.projects = [
        { id: '1',title: 'Tareas', imageUrl: 'assets/projects/tasks.png', linkUrl: 'https://pacific-spire-65839-b62b03a951e8.herokuapp.com/', description: 'Aplicación creada con react y backend desarrollado en Go ',githubUrl:'https://github.com/jurian-byte/tasksFront',githubB:'https://github.com/jurian-byte/tasks', icons: ['fab fa-react', 'fab fa-golang']},

        { id: '2',title: 'Gestión bibliotecaria', imageUrl: 'assets/projects/sabe.png', linkUrl: 'https://drive.google.com/drive/folders/190xiGwZqElD8fk9p-E2Z1J2FbZ0RIgg4?usp=sharing', description: 'Aplicación creada con Angular',
        githubUrl:'https://github.com/jurian-byte/SABEfront', icons: ['fab fa-angular', 'fab fa-golang']},
        { id: '3',title: 'App de clima',imageUrl: 'assets/projects/weather-app.png', linkUrl: 'https://young-wave-15612-ebd929ea1655.herokuapp.com/' , description: 'Aplicación creada con react consumiendo open-meteo',githubUrl:'https://github.com/jurian-byte/weather-app', icons: ['fab fa-react']},

      ];




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
