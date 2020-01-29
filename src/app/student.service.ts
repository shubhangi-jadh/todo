import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  updateData;
  constructor(private http: HttpClient) { }
  
  fetchToDos() {
   return this.http.get<{todo: [], message: string}>('http://localhost:3000/api/todo')
  }

  createUser(obj) {
    return this.http.post<{ message: string}>("http://localhost:3000/api/newuser",obj)
  }
  deleteUser(_id){
    return this.http.delete<{message:string}>("http://localhost:3000/api/list/"+_id)

  }
  updateUser(id,obj){
    return this.http.put<{message:string}>("http://localhost:3000/api/updateUser/"+id,obj)
  }
  
  search(text) {
    return this.http.post<{message: string, todo:[]}>("http://localhost:3000/api/search",{text: text})
  }
  sort(obj){
    return this.http.get<{todo: [],message:string}>("http://localhost:3000/api/sort")
  }

}
