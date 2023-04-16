import { Component } from '@angular/core';
import { LanguageService } from './shared/language/language.service';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  constructor(private readonly languageService: LanguageService) {
    this.languageService.setLanguage();
  }
}
