import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { StudentService } from '../student.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  subscription: Subscription;
  
  constructor(private databaseService:StudentService,private fb:FormBuilder) {
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required,Validators.email]],
    phone: ['', Validators.required],
    password: ['', [Validators.required,Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    tnc: ['', Validators.required]
   });
   
   }
   
    get fval() {
    return this.registerForm.controls;
    }
    //this.user.fullName='';
    signup(){
    this.submitted = true;
    if (this.registerForm.invalid) {
    return;
    }
    alert('form validated successfully!');
    }
   

  
 
 }
