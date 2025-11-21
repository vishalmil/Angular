import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { InvestmentsComponent } from './investments/investments.component';
import { FreshInvestmentsComponent } from "./fresh-investments/fresh-investments.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-management';
}
