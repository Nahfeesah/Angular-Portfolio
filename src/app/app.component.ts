import { Component, PipeTransform } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements PipeTransform {
  logo = "assets/_Nafeesah.png"
  heroImg = "assets/hero2.jpeg";
  myName: string = "Ibrahim Nofisat"
  title = "Front-end & Mobile app Developer"
  transform(value: any, ...args: any[]) {
    
  }
}
