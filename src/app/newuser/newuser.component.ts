import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { User } from '../user.model';
import { FirebaseupdateService } from '../firebaseupdate.service';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  
  title;
  message;
  date;
  price;
  users;
  
  constructor(private fbu:FirebaseupdateService,private af:AngularFireAuth,private afd:AngularFireDatabase,private fb:FormBuilder,private service:StudentService) {
   }
  
  ngOnInit() {
    //this. fetchUsers();
this.message=this.fb.group({
  title:['',Validators.required],
  message:['',Validators.required],
  price:['',Validators.required],
  date:['',Validators.required]
      })
    }
  onButtonClick() {
    //  this.fbu.createUser(this.title,this.message,this.date);
     console.log("data ready");
     //api
     let obj = {
      title: this.title,
      message: this.message,
      price:this.price,
      date: this.date
     }
      this.service.createUser(obj).subscribe(data=> {
        alert(data);
      },error => {
        console.log(error);
      })
    }
   // this.af.auth.createUserWithEmailAndPassword(this.email,this.password).then(user => {
    //  this.afd.database.ref().child("Development").child("users").child(user.user.uid).update({
      //  "title": this.title,
        ///"message": this.message,
        //"contact": this.contact,
        //"email": this.email
     // })
    //}).catch(error => {
     // console.log(error);
    //})
   
  }

  /*fetchUsers()
{
  this.afd.database.ref().child("Development").child("todo").on("value",result => {
     let data = result.val();
      this.users = [];
      result.forEach(user => {
       this.users.push(user.val())
     })
       console.log(data);
    })
  }*/
  
  

/*fetchUsers() {
      this.ref.on('value',snapshot => {
    this.notesArray = [];
    snapshot.forEach(doc => {
     this.notesArray.push(doc.val());
    });
  }*/

