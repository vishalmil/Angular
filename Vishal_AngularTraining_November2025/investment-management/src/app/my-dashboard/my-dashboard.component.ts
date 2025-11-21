import { Component, OnInit } from '@angular/core';
import { Investment } from '../models/investment';
import { InvestmentService } from '../services/investment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-dashboard.component.html',
  styleUrl: './my-dashboard.component.css'
})

export class MyDashboardComponent implements OnInit{
  allMyInvestments: Investment[] = [];
  message: string;
  selectedInvestment!: Investment;
  
  totalInvestments: number = 0;
  topInvestment: Investment | null = null;
  topFiveInvestments: Investment[] = [];

  constructor(private investmentService: InvestmentService){
    this.message = 'You have not started with any investment yet!!!';
  }

  ngOnInit(): void {
    this.investmentService.getInvestments().subscribe(data => {
      this.allMyInvestments = data;

      // Calculate Dashboard Values
      this.totalInvestments = this.allMyInvestments.length;

      // Top Investment (max current value)
      this.topInvestment = this.allMyInvestments.reduce((max, inv) =>
        inv.currentValue > max.currentValue ? inv : max
      );

      // Top 5 investments
      this.topFiveInvestments = [...this.allMyInvestments]
        .sort((a, b) => b.currentValue - a.currentValue)
        .slice(0, 5);
        console.log(this.topFiveInvestments);
    })
  }

  selectInvestment(investment: Investment):void{
    this.selectedInvestment = investment
  }
}

