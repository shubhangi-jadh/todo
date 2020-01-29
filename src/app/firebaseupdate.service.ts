import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseupdateService {

  
  constructor(private afd: AngularFireDatabase) { }

  ref = this.afd.database.ref().child("todo")
  userArray;

  createUser(title:string, message: string,price:number,date: number) {
     let id = this.ref.push().key
     this.ref.child(id).set({
       title: title,
       message: message,
       price:price,
       date: date,
       id:id
     })
  }

  fetchUsers() {
    this.ref.on('value',snapshot => {
      this.userArray = [];
      snapshot.forEach(doc => {
        this.userArray.push(doc.val());
      })
    })
  }

  updateUser(id: string, title: string, message: string,price:number, date: Date) {
    this.ref.child(id).update({
      title: title,
      message: message,
      price:price,
      date: date,
      id:id
    })
  }

  deleteUser(id: string) {
    this.ref.child(id).remove();
  }
}
