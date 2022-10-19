import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  linkedInIcon = faLinkedinIn;
  githubIcon = faGithubAlt;
  instagramIcon = faInstagram;


  constructor() { }

  ngOnInit(): void {
  }

}
