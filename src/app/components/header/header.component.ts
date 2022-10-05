import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  barsIcon = faBars;
  sideNav: boolean = false;
  offcanvasRef?: NgbOffcanvasRef;

  constructor(private offcanvasService: NgbOffcanvas) { }

  ngOnInit(): void {
  }
  
  navigate() {
    if(this.offcanvasRef) {
      this.offcanvasRef.close();
    }
  }

  open(content: any) {
    this.sideNav = true;
    this.offcanvasRef = this.offcanvasService.open(content, { position: 'end' });
    
    let resetNav = ()=> {
      setTimeout(()=> {this.sideNav = false}, 200);
    };


    this.offcanvasRef.result.then(resetNav, resetNav);
  }

}
