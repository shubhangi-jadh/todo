import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseupdateService } from '../firebaseupdate.service'
import { from } from 'rxjs';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  title;
  date;
  users;
  updateData;
  price;
  message: FormGroup;
  id;

  data;
 
  constructor(private s:StudentService,private ar:ActivatedRoute,private fib:FirebaseupdateService,private fb:FormBuilder,private af:AngularFireAuth,private afd:AngularFireDatabase,private router: Router) { }

  ngOnInit() {//api
    console.log(this.s.updateData)
    this.data = this.s.updateData;
    this.title = this.data.title;
    this.message = this.data.message;
    this.price=this.data.price;
    this.date = new Date(this.data.date);

    //crud op
   /* this.id=this.ar.snapshot.params.id
this.afd.database.ref().child("todo").child(this.id).once("value",snapshot=>{
  this.updateData=snapshot.val();
  this.title = this.updateData.title;
  this.message = this.updateData.message;
  this.date = this.updateData.date;

})*/
    }
    
  onSubmit(){// crud op
    /*this.afd.database.ref().child("todo").child(this.id).update({
    title:this.title,
    message:this.message,
    date:this.date,

    })
    this.router.navigateByUrl('/user');*/

    //api update
    let obj = {
      title: this.title,
      message: this.message,
      price:this.price,
      date: this.date
     }
      this.s.updateUser(this.data._id,obj).subscribe(data=> {
        alert(data.message);
      },error => {
        console.log(error);
      })
  }

  

}
