import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from '../language/language.component';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, LanguageComponent, MenubarModule, HeaderComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  items: MenuItem[] = [
    {
      label: 'About us',
      url: '/about-us',
    },
    {
      label: 'Home',
    },
  ];
}
