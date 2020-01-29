import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { StudentService } from '../student.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseupdateService } from '../firebaseupdate.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title;
  message;
  date;
  users;
  database;
  price;
  userArray;
  ProdData: any[];
  constructor(private fib:FirebaseupdateService,private af:AngularFireAuth,private afd:AngularFireDatabase,private s:StudentService ) { }

  ngOnInit() {
    /** this.ProdData = [
      { "title":"",
        "price":""}]
        this.ProdData = this.ProdData.sort((low, high) => low.Price - high.Price);*/

    /* crud

    let obje=this;
     var ref=this.afd.database.ref().child("todo")
     ref.on("value",function(snapshot){
      obje.userArray=[];
       snapshot.forEach(doc =>{
        obje.userArray.push(doc.val())
      })
    })*/
    this.userArray= [];

    // mongo
    this.s.fetchToDos().subscribe(data => {
      this.userArray = data.todo;
    })
  }
 deleteUser(userId){ //crde op
  /*this.database=this.afd.database.ref().child("todo");
   this.database.child("todo").child(userId).remove();

 
  this.fib.deleteUser(userId)*/

  //api delete
  
    this.s.deleteUser(userId).subscribe(res =>{
      console.log(res.message);
    });

  }

//crud
 updateUser(userId){
  this.fib.updateUser(userId,this.title,this.message,this.price,this.date)
}
//api
edit(user) {
  this.s.updateData = user;
}

search(event) {
  this.userArray= [];
  let text = event.target.value;
  console.log(text);
  this.s.search(text).subscribe(data => {
    this.userArray = data.todo
  })
} 
sort(event){
  this.userArray=[];
  let text=event.target.value;
  console.log();
  let obj = {

  }
  this.s.sort(obj).subscribe(data =>{
    this.userArray= data.todo
  })
}

/**sort(event: any) {
  switch (event.target.value) {
    case "Low":
      {
        this.ProdData = this.ProdData.sort((low, high) => low.Price - high.Price);
        break;
      }

    case "High":
      {
        this.ProdData = this.ProdData.sort((low, high) => high.Price - low.Price);
        break;
      }

    case "Title":
      {
        this.ProdData = this.ProdData.sort(function (low, high) {
          if (low.title < high.title) {
            return -1;
          }
          else if (low.title > high.title) {
            return 1;
          }
          else {
            return 0;
          }
        })
        break;
      }

    default: {
      this.ProdData = this.ProdData.sort((low, high) => low.Price - high.Price);
      break;
    }

  }
  return this.ProdData;

} */

}
