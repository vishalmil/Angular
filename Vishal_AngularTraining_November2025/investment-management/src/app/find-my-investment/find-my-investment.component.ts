import { Component } from '@angular/core';
import { Investment } from '../models/investment';
import { InvestmentService } from '../services/investment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-my-investment',
  standalone: true,
  templateUrl: './find-my-investment.component.html',
  styleUrl: './find-my-investment.component.css',
  imports: [CommonModule, FormsModule]
})
export class FindMyInvestmentComponent {

  investmentId!: number;
  investment: Investment | null = null;
  message = '';
  isEditMode = false;

  editableInvestment = {
    amount: 0,
    currentValue: 0
  };

  constructor(private investmentService: InvestmentService) {}

  // FIND INVESTMENT
  findInvestment() {
    try{
      if(this.investmentId > 0){
        this.investmentService.getInvestmentById(this.investmentId).subscribe(data => {
          if (data) {
            this.investment = data;
            this.message = '';
          } else {
            this.investment = null;
            this.message = 'No investment found!';
          }
        });
      }else{
        this.message = 'Please enter valid id!'
      }
    } catch (e) {
      console.error("Unexpected Error:", e);
      this.message = "Unexpected error occurred!";
    }
  }

  // START EDITING
  editInvestment() {
    try{
      if (!this.investment) return;

      this.isEditMode = true;

      this.editableInvestment = {
        amount: this.investment.amount,
        currentValue: this.investment.currentValue
      };
    } catch (e) {
      console.error("Unexpected Error:", e);
      this.message = "Unexpected error occurred!";
    }
  }

  // CANCEL EDIT
  cancelUpdate() {
    this.isEditMode = false;
  }

  // SAVE UPDATED VALUES
  saveUpdate() {
    try{
      if (!this.investment) return;

      const updatedData: Investment = {
        ...this.investment,
        amount: this.editableInvestment.amount,
        currentValue: this.editableInvestment.currentValue
      };
      console.log(this.investment.amount +" "+ this.editableInvestment.amount  +" "+ this.investment.currentValue +" "+ this.editableInvestment.currentValue);
      if(this.investment.amount != this.editableInvestment.amount || this.investment.currentValue != this.editableInvestment.currentValue){
        this.investmentService.updateInvestment(updatedData).subscribe(() => {
          this.investment = updatedData;
          this.isEditMode = false;
        
          alert("Updated successfully!");
        });
      }
    } catch (e) {
      this.investment = null;
      console.error("Unexpected Error:", e);
      this.message = "Unexpected error occurred!";
    }
  }

  // DELETE INVESTMENT
  deleteInvestment() {
    try{
      if (!this.investment) return;

      if (confirm("Are you sure you want to delete this investment?")) {
        this.investmentService.deleteInvestment(this.investment.id).subscribe(() => {
          alert("Investment deleted!");
          this.investment = null;
          this.message = "Investment removed successfully!";
        });
      }
    } catch (e) {
      console.error("Unexpected Error:", e);
      this.message = "Unexpected error occurred!";
    }
  }
}






// import { Component, Input } from '@angular/core';
// import { Investment } from '../models/investment';
// import { InvestmentService } from '../services/investment.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-find-my-investment',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './find-my-investment.component.html',
//   styleUrl: './find-my-investment.component.css'
// })
// export class FindMyInvestmentComponent {
//   investmentId: number = 0;
//   @Input() selectedInvestment!: Investment;
  
//   investment: Investment | null = null;
//   message: string;

//   constructor(private investmentService: InvestmentService){
//     this.message = 'Invalid id try again!!!';
//   }

//   findInvestment():void{
//     if(this.investmentId != null){
//     this.investmentService.getInvestment(this.investmentId).subscribe(response =>{
//       this.investment = response;
//       console.log(this.investment);
//     });    
//   }
//   }
// }
