import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Investment } from '../models/investment';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-fresh-investments',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule,],
  templateUrl: './fresh-investments.component.html',
  styleUrl: './fresh-investments.component.css'
})

export class FreshInvestmentsComponent {

  investmentForm = this.fb.nonNullable.group({
    id: [0, Validators.required],
    name: ['', Validators.required],
    type: ['', Validators.required],
    amount: [0, Validators.required],
    purchaseDate: ['', [Validators.required, this.validateCurrentDate]],
    currentValue: [0, Validators.required],
  })
  
  constructor(private fb:FormBuilder, private investmentService: InvestmentService){
    //this.fb.group({});
  }

  validateCurrentDate(control: any){
    const today = new Date().toISOString().split('T')[0];
    return control.value === today ? null : { invalidDate: true };
  }

  // onSubmit(){
  //   const formValues = this.investmentForm.getRawValue();
  //   const investment: Investment = {
  //     id: formValues.id,
  //     name: formValues.name,
  //     type: formValues.type as 'Equity' | 'Debt' | 'Mutual Fund',
  //     amount: formValues.amount,
  //     purchaseDate: formValues.purchaseDate,
  //     currentValue: formValues.currentValue
  //   }

  //   if(this.investmentForm.valid){
  //     this.investmentService.addInvestment(investment).subscribe(response =>{
  //       console.log("Investments added successfully", response);
  //     });
  //     alert('Investmet added successfully!');
      
  //   }
  //   else{
  //     alert('Please fill all fields correctly');
  //   }
  // }

  onSubmit() {
    if (this.investmentForm.invalid) {
      alert('Please fill all fields correctly');
      return;
    }
  
    this.investmentService.getInvestments().subscribe(allData => {
  
      const maxId = allData.length > 0
        ? Math.max(...allData.map(inv => Number(inv.id))) 
        : 0;
  
      const newId = maxId + 1;
  
      const formValues = this.investmentForm.getRawValue();
  
      const investment: Investment = {
        id: newId,   // ensure string type
        name: formValues.name,
        type: formValues.type as 'Equity' | 'Debt' | 'Mutual Fund',
        amount: formValues.amount,
        purchaseDate: formValues.purchaseDate,
        currentValue: formValues.currentValue
      };
  
      this.investmentService.addInvestment(investment).subscribe(response => {
        console.log("Investment added successfully", response);
        alert('Investment added successfully!');
      });
    });
  }
  

}
