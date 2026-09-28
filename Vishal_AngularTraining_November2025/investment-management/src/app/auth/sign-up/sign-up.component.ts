import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  signUpForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    role: ['', Validators.required]
  })

  constructor(private fb:FormBuilder, private authService: AuthService){

  }

  onSubmit(){
    if(this.signUpForm.invalid){
      console.log(this.signUpForm)
      alert('Please fill all fields correctly');
      return;
    }

    this.authService.getUsers().subscribe(allData => {
      const UserIds = allData.length;
      const maxId = UserIds > 0 
      ? UserIds + 1
      : 1;

      const formValues = this.signUpForm.getRawValue();

      const user: User = {
        id: maxId,
        name: formValues.name,
        email: formValues.email,
        gender: formValues.gender,
        phone: formValues.phone,
        password: formValues.password,
        role: formValues.role as 'user' | 'admin'
      };

      this.authService.addUser(user).subscribe(response =>{
        console.log("User registered successfully", response);
        console.log('User being sent:', user);
        console.log('Server response:', response);
        alert('User registered successfully!');
      })
    })
  }
} 
