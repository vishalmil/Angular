import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../services/investment.service';
import { Investment } from '../models/investment';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-investment',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './my-investment.component.html',
  styleUrl: './my-investment.component.css'
})


export class InvestmentsComponent implements OnInit{
  allMyInvestments: Investment[] = [];
  message: string;

  constructor(private investmentService: InvestmentService){
    this.message = 'You have not started with any investment yet!!!';
  }

  ngOnInit(): void {
    this.investmentService.getInvestments().subscribe(data => {
      this.allMyInvestments = data;
    })
  }
}
