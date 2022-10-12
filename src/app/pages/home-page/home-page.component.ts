import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  linkedInIcon = faLinkedinIn;
  githubIcon = faGithubAlt;
  instagramIcon = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
