import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ILanguage } from './language.interface';
import { LanguageService } from './language.service';
import { TranslateService } from '@ngx-translate/core';
import { DestroyService } from '../../core/services/destroy.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [
    CommonModule,
    CascadeSelectModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
  ],
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent {
  @Input() color = '#000000';
  language: FormControl = new FormControl();

  languages!: ILanguage[];

  selectLanguage: ILanguage;

  constructor(
    private readonly languageService: LanguageService,
    private readonly translateService: TranslateService,
    private readonly destroy$: DestroyService
  ) {
    this.language.valueChanges.pipe(takeUntil(destroy$)).subscribe((code) => {
      this.translateService.use(code);
      this.languageService.changeLanguage(code);
      this.selectLanguage = this.languageService.getLanguage(code);
    });
    this.languages = this.languageService.getLanguages();
    this.selectLanguage = this.languageService.getLanguage(
      this.translateService.currentLang
    );
    this.language.setValue(this.selectLanguage.code);
  }
}
