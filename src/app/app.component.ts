import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuSection } from './interfaces/menu-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menuSections: IMenuSection[] = [
    {
      label: 'Getting Started',
      routerLink: 'getting-started',
      isShowing: false,
      items: [
        {
          label: 'About',
          link: 'aboutSection'
        },
        {
          label: 'Browser Resets',
          link: 'browserResetsSection'
        },
        {
          label: 'Imported Fonts',
          link: 'importedFonts'
        }
      ],
    },
    {
      label: 'Usage',
      routerLink: 'usage',
      isShowing: false,
      items: [
        {
          label: 'Padding & Margin',
          link: 'paddingMarginSect'
        },
        {
          label: 'Horizontal Centering',
          link: 'horizontalCenteringSect',
        },
        {
          label: 'Breakpoints',
          link: 'breakpointsSect'
        },
        {
          label: 'Colors',
          link: 'colorsSect',
        },
        {
          label: 'Headings',
          link: 'headingsSect'
        },
        {
          label: 'Forms',
          link: 'formsSect'
        },
        {
          label: 'Buttons',
          link: 'buttonsSect',
        },
      ],
    },
    {
      label: 'Config Overrides',
      routerLink: 'config-overrides',
      isShowing: false,
      items: []
    }
  ];

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  /* -------------------------- ON ROUTER ACTIVATION -------------------------- */
  // Get routerlink as string (without `/`)
  onActivate() { this.triggerSection(this.router.url.slice(1)); }

  // Set all objects `isShowing` to false
  private resetSections() {
    this.menuSections.map((section: IMenuSection) => Object.assign(section, {isShowing: false}));
  }

  // Set activated route's `isShowing` property to true
  private triggerSection(routerLink: string) {
    this.resetSections();
    const sectionIndex = this.menuSections.findIndex((section: IMenuSection) => section.routerLink == routerLink);
    this.menuSections[sectionIndex].isShowing = true;
  }
}
