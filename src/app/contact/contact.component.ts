import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor() { }

  ngOnInit(): void {
  }

  envioCorreo() {
    alert("Lo sentimos de momento no se puede enviar mensajes.");
  }

}
