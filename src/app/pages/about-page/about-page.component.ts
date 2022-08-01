import { Component, OnDestroy, OnInit } from '@angular/core';
import {} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FooterService } from 'src/app/components/footer/footer.service';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, OnDestroy{

  linkedInIcon = faLinkedinIn;
  githubIcon = faGithubAlt;
  instagramIcon = faInstagram;

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.hideIcons();
  }
  
  ngOnDestroy() {
    this.footerService.showIcons();

  }

}
