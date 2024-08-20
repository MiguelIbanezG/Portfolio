import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experiencie',
  templateUrl: './experiencie.component.html',
  styleUrls: ['./experiencie.component.css']
})
export class ExperiencieComponent {

  idiomaPagina: String = "es";

  constructor(
    private translate: TranslateService) {
    this.listaTrabajos();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.idiomaPagina = event.lang
    });
  }

  ngOnInit(): void {
    this.idiomaPagina =  this.translate.currentLang;
  }

  listaTrabajos() {


  }

}
