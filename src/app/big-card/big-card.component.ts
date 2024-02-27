import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  @Input()
  capaFoto:string ='';
  @Input()
  cardTitulo:string='';
  @Input()
  cardDesc:string='';
  @Input()
  id:string='0';
}
