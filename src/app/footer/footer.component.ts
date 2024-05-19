import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  date = "";

  constructor(
  ) {
    this.getDate();
  }

  // Function to get Date
  getDate() {
    const fechaHora = new Date();
    this.date = fechaHora.toLocaleString(); 
    setInterval(()=>{
      const fechaHora = new Date();
      this.date = fechaHora.toLocaleString(); 
    },1000)
  }


}
