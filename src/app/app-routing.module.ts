import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'inicio', component: HeaderComponent},
  { path: 'sobre-mi', component: AboutMeComponent},
  { path: 'contacto', component: FooterComponent},
  {path:'proyectos',component:ProjectsComponent},
  {path:'', redirectTo: '/inicio', pathMatch: 'full'},
  {path:'**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
