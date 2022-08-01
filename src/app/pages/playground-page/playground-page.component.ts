import { Component, OnInit } from '@angular/core';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-playground-page',
  templateUrl: './playground-page.component.html',
  styleUrls: ['./playground-page.component.scss']
})
export class PlaygroundPageComponent implements OnInit {
  
  constructionIcon = faPersonDigging;
  
  constructor() { }

  ngOnInit(): void {
  }

}
