import { Component, HostListener } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Add logic to handle scroll event
    // For example, you can change the background color of the navbar when scrolling
    let navbar = document.querySelector('nav');
    if (window.scrollY > 25) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }
}
