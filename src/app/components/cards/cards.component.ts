import { Component, Input } from '@angular/core';
import { Beer } from '../../models/beer.models'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {


  @Input() beer! : Beer;

}
