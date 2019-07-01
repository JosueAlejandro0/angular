import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultacurp',
  templateUrl: './consultacurp.component.html',
  styleUrls: ['./consultacurp.component.css']
})
export class ConsultacurpComponent implements OnInit {

  todoArray=[];
  public button:boolean = false;
   constructor() { }
 
   addTodo(value){
     if(value!==""){
      this.todoArray.push(value);
      this.button=true;
     //console.log(this.todos) 
   }else{
     alert('FAVOR DE LLENAR EL CAMPO')
   }
     
   }
 
     deleteItem(todo){   
       for(let i=0 ;i<= this.todoArray.length ;i++){
         if(todo== this.todoArray[i]){
           this.todoArray.splice(i,1); 
         }   
       }
       if(this.todoArray.length===0){
         this.button=false;
       }  
     }
     todoSubmit(){
       if((this.todoArray).length==0){
         alert("INGRESA UN RFC")
       }else{
         console.log(this.todoArray);
         this.todoArray=[];
         this.button=false;
       }
      
    }
 
   ngOnInit() {
     
   }
}
