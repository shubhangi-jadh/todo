import { Injectable } from '@angular/core';
import { Observable, forkJoin, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private subject=new Subject <any>();

  constructor(private http: HttpClient) { }
  consumePostApi()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  consumeUserApi(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  forkJoinMethod(){
    return forkJoin([this.consumePostApi(),this.consumeUserApi()])
}
sendMessage(message:string){
  this.subject.next(message);
}
clearMessage(){
  this.subject.next();
}
getMessage(){
  return this.subject.asObservable();
}
}
