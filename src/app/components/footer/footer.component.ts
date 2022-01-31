import { Component, OnInit } from '@angular/core';
import { faGithubSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  linkedIn = faLinkedin;
  github = faGithubSquare;
  instagram = faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

}
