import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  phones:
    | {
        en: string;
        hu: string;
        ru: string;
        kk: string;
      }
    | any = {
    en: '+77777777777',
    ru: '+79999999999',
    kk: '+78888888888',
    hu: '+70000000000',
  };

  get currentLang(): string {
    return this.translateService.currentLang;
  }

  constructor(private translateService: TranslateService) {}
}
