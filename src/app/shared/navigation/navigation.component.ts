import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from '../language/language.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, LanguageComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {}
