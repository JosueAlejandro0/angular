import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  todoArray=[];
  public button:boolean = false;
  public alert:boolean = false;
  public alert2:boolean = false;
  public hid:boolean = false;
   constructor(private http: HttpClient) { }
 
  addTodo(value){
    try{
      if(value!==null){ 
        if(value.length<12){
          this.alert=true;
        }else{
          if(this.todoArray.length===19){
            this.hid=true;
            this.alert2=true;
          }
          this.todoArray.push(value);
          this.button=true;
          this.alert=false;
        
        }
      }else{
        this.alert=true;
      }
    }catch(error){ console.log(error)}
    
   }
 
     deleteItem(todo){   
       for(let i=0 ;i<= this.todoArray.length ;i++){
         if(todo== this.todoArray[i]){
           this.todoArray.splice(i,1); 
           this.alert=false;
         }   
       }
       if(this.todoArray.length===0){
         this.button=false;
         
       }else if(this.todoArray.length<20){
         this.hid=false;
         this.alert2=false;
       }  
     }
     todoSubmit(){
       if((this.todoArray).length==0){
         alert("INGRESA UN CURP")
       }else{
         console.log(this.todoArray);
         
       
         
         this.todoArray=[];
         this.button=false;
         this.alert=false;
         this.hid=false;
         this.alert2=false;
//return this.http.post("",this.todoArray);
       }
      
    }
 
   ngOnInit() {
     
   }
}
