import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
  @ViewChild('aboutSect') aboutSect!: ElementRef;
  @ViewChild('browserResetsSect') browserResetsSect!: ElementRef;
  constructor() {}
  ngOnInit(): void {

  }
}
