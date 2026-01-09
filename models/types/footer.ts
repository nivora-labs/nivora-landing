export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  email: string;
  phone: string;
  locations: string[];
  quickLinks: FooterLink[];
  industries: string[];
  newsletter: string;
  copyright: string;
  legal: string[];
}
