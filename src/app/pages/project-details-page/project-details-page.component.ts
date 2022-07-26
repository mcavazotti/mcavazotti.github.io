import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/background.service';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss']
})
export class ProjectDetailsPageComponent implements OnInit, OnDestroy {

  constructor(private bgService: BackgroundService) {
    bgService.darkState(true);
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.bgService.darkState(false);
  }

}
