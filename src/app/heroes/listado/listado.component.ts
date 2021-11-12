import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent implements OnInit {
  heroeBorrado : string='';
  wasRemoved : boolean = false;
  constructor() {
    console.log('Constructor');

   }
   
 
    //nombre:string = 'Ironman';

  ngOnInit(): void {
    console.log('NgOnInit');
  }

  heroes: string[] = ['SpiderMan','Thor','Ironman','Hulk'];

  borrarHeroe() {
   this.heroeBorrado =   this.heroes.shift() || '';
   this.wasRemoved = this.heroeBorrado.length > 0;
   ///console.log(heroeBorrado);
  }

}
