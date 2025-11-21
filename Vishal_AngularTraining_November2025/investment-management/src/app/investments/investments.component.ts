import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Investment } from '../models/investment';
import { Call } from '@angular/compiler';
import { InvestmentService } from '../services/investment.service';
import { FindMyInvestmentComponent } from "../find-my-investment/find-my-investment.component";

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FindMyInvestmentComponent],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.css'
})

export class InvestmentsComponent implements OnInit{
  allMyInvestments: Investment[] = [];
  message: string;
  selectedInvestment!: Investment;

  constructor(private investmentService: InvestmentService){
    this.message = 'You have not started with any investment yet!!!';
  }

  ngOnInit(): void {
    this.investmentService.getInvestments().subscribe(data => {
      this.allMyInvestments = data;

      if (this.allMyInvestments.length > 0) {
        this.selectedInvestment = this.allMyInvestments[0];
      }
    })
  }

  selectInvestment(investment: Investment):void{
    this.selectedInvestment = investment
  }
}


// export class InvestmentsComponent {
//   allMyInvestments: Investment[] = [];
//   message: string;
  
//   constructor(private httpclient: HttpClient) {
//     console.log('InvestmentsComponent instantiated');
//     this.message='You have not started with any investment yet!!!';
//   }
//   ngOnInit(): void {
//     this.httpclient.get<Investment[]>('http://localhost:3000/investments')
//     .subscribe(
//       response=>{
//         this.allMyInvestments = response;
//         console.log(this.allMyInvestments);
//       }
//     );
//   }
//}