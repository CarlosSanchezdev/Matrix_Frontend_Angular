import { Component, EventEmitter, Output} from '@angular/core';
import {ApiServiceService} from '../../services/api-service.service';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  public isLoading = false;
  public src: string = '';
  public data$: any;
  
  @Output() messageEvent = new EventEmitter<any>();

  constructor(private api: ApiServiceService) {
  }

  search(value: any): any {
    this.isLoading = true;

    this.data$ = this.api.searchBeer({beer: value})
    .subscribe(data => {this.data$ = data,
    this.messageEvent.emit(this.data$)
      finalize(() => this.isLoading = false)});
 
  }

}
