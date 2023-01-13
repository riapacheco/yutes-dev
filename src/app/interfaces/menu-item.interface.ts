export interface IMenuSection {
  label?: string;
  items?: IMenuItem[];
  routerLink?: string;
  link?: string;
  isShowing?: boolean;
}

export interface IMenuItem {
  label?: string;
  link?: string;
  routerLink?: string;
}
