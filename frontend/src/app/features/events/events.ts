import { Component } from '@angular/core';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-events',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events {
  // ngOnInit(){
  //   window.scrollTo(0,0)
  // } 
  selectedEvent:any={
    titel:'',
    date:'',
    location:'',
    description:'',
    shortDescription:'',
  }
  events:any=[]
    constructor(private apiService :Api){}
    ngOnInit(){
      this.getEvents();
    }
    getEvents(){
      this.apiService.getEvents().subscribe({
        next:(response:any)=>{
          if(response&&response['status']==='Yes'){
           this.events=response.data
           console.log(this.events);
           
            
          }
        },error(error:any){
        console.log(error);
        }
      });
      }

      showEvent(event:any){
        this.selectedEvent=event;
      }
}
