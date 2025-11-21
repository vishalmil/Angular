import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  subtitle: string;
  constructor(){
    this.subtitle = "This is subtitile!!!";
  }

}
