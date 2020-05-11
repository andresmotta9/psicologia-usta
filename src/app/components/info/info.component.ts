import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }
  personInfo = false;
  intro = true;

  ngOnInit(): void {
  }
  // constructor() { }

  // tslint:disable-next-line: align
  displayPersonForm() {
    let hideIntro = document.getElementById("intro");
    hideIntro.style.animation = "fadeOut 1s ease-out";
    setTimeout( () => {
      this.intro = false;
      let person = document.getElementById("person");
      hideIntro.style.animation = "fadeIn 1s ease-out";
      this.personInfo = true;
    }, 1000)
  }

}
