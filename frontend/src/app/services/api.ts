import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private http:HttpClient) { }
   getNotices(){
      return this.http.get(`${environment.apiUrl}/notice`)
  }
   getEvents(){
      return this.http.get(`${environment.apiUrl}/event`)
  }
   getGallery(){
    return this.http.get(`${environment.apiUrl}/gallery`)
  }
  getContacts(){
    return this.http.get(`${environment.apiUrl}/contact`)
  }
   deleteContact(id:string){
    return this.http.delete(`${environment.apiUrl}/contact/${id}`)
  }
  getTeachers(){
    return this.http.get(`${environment.apiUrl}/teacher`)
  }
  submitForm(formData:any){
    return this.http.post(`${environment.apiUrl}/contact`,formData)
  }
}
