import { Component } from '@angular/core';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact-dashboard',
  imports: [CommonModule],
  templateUrl: './contact-dashboard.html',
  styleUrl: './contact-dashboard.scss'
})
export class ContactDashboard {
  contacts:any = []
  selectedContact ={
    email:'',
    name:'',
    phone:null,
    subject:'',
    message:'',
  }
  constructor(private apiService:Api){}
ngOnInit(){
      this.onLoad();
    }
    onLoad(){
      this.apiService.getContacts().subscribe({
        next:(response:any)=>{
          if(response&&response['status']==='Yes'){
           this.contacts=response.data
           console.log(this.contacts);
           
            
          }
        },error(error:any){
        console.log(error);
        }
      });
      }

      viewContact(contact:any){
        this.selectedContact = contact;
      }
      deleteContact(contact:any){
        console.log(contact);
        this.apiService.deleteContact(contact._id).subscribe({
        next:(response:any)=>{
          if(response&&response['status']==='Yes'){
            alert(response.message)
            this.onLoad()
            
          }
        },error(error:any){
        console.log(error);
        }
      });
        
      }

      // showEvent(event:any){
      //   this.selectedEvent=event;
      // }
}
