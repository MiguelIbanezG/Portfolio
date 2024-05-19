import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { lenguajes } from '../Common/GlobalVariables';
import { frases } from '../Common/GlobalVariables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fraseHome: string[] = [frases.es,frases.en];
  idiomaPagina: String = "es";

  constructor(
    private translate: TranslateService,
    private router: Router,
  ) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.idiomaPagina = event.lang
    });
  }

  ngOnInit(): void {
    this.idiomaPagina =  this.translate.currentLang;
  }

}
