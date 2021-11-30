import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  
})
export class MainPageComponent  {


   //agregar(event:any) {
     //event.preventDefault();
    //console.log("!!!!Hey");
  //}

    personajes : Personaje[] = [ 
    {
      nombre:'Goku',
      poder:15000
    },
    {
      nombre:'Vegeta',
      poder:7500
    }
  ]
   nuevo:Personaje = {
     nombre:'',
     poder: 0
   } 
  agregar() {
    if(this.nuevo.nombre.trim().length === 0){return;}

   console.log(this.nuevo);

   this.personajes.push(this.nuevo);
   this.nuevo = {
     nombre:'',
     poder:0
   }
 }

 cambiarNombre(event:any) {
  console.log(event.target.value);
 }
}
