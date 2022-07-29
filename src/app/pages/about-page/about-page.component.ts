import { Component, OnInit } from '@angular/core';
import {} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  linkedInIcon = faLinkedinIn;
  githubIcon = faGithubAlt;
  instagramIcon = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
