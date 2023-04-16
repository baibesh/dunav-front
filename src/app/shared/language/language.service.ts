import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ILanguage } from 'src/app/shared/language/language.interface';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  languages: ILanguage[] = [
    {
      label: 'Magyar',
      icon: 'hu',
      code: 'hu',
    },
    {
      label: 'English',
      icon: 'gb',
      code: 'en',
    },
    {
      label: 'Русский',
      icon: 'ru',
      code: 'ru',
    },
    {
      label: 'Қазақша',
      icon: 'kk',
      code: 'kk',
    },
  ];
  languageMap:
    | {
        en: ILanguage;
        hu: ILanguage;
        kk: ILanguage;
        ru: ILanguage;
      }
    | any = {
    en: {
      code: 'en',
      label: 'English',
      icon: 'gb',
    },
    hu: {
      code: 'hu',
      label: 'Magyar',
      icon: 'hu',
    },
    kk: {
      label: 'Қазақша',
      icon: 'kk',
      code: 'kk',
    },
    ru: {
      label: 'Русский',
      icon: 'ru',
      code: 'ru',
    },
  };

  constructor(private translateService: TranslateService) {}

  changeLanguage(languageCode: string): void {
    this.translateService.use(languageCode);
    localStorage.setItem('lang', languageCode);
  }

  getLanguages(): ILanguage[] {
    return this.languages;
  }

  getLanguage(code: string): ILanguage {
    const languages = this.languages.map((lang) => lang.code);
    if (languages.includes(code)) {
      return this.languageMap[code];
    } else {
      return this.languageMap['en'];
    }
  }

  setLanguage(): void {
    const localLanguage: string | null = localStorage.getItem('lang');
    if (localLanguage) {
      const valid: boolean = this.languages.some(
        (lang: ILanguage) => lang.code === localLanguage
      );

      if (valid) {
        this.translateService.use(localLanguage);
      } else {
        this.setDefaultLanguage();
      }
    } else {
      this.setDefaultLanguage();
    }
  }

  setDefaultLanguage(): void {
    const language = 'en';

    const browserLanguage: string | undefined =
      this.translateService.getBrowserLang();

    if (browserLanguage) {
      const valid: boolean = this.languages.some(
        (lang: ILanguage) => lang.code === browserLanguage
      );
      if (valid) {
        localStorage.setItem('lang', browserLanguage);
      } else {
        localStorage.setItem('lang', language);
      }
    } else {
      localStorage.setItem('lang', language);
    }
  }
}
