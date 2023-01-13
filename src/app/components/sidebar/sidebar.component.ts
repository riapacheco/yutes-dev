import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuSection } from 'src/app/interfaces/menu-item.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  @Input() menuSections: IMenuSection[] = [];

  constructor(
    private router: Router
  ) {}
  ngOnInit(): void {

  }


}
