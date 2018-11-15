import { Component, OnInit } from '@angular/core';
import { ProviderService } from './provider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private provider: ProviderService) {}

  missionsHolder$: Observable<any[]>;
  valuesHolder$: Observable<any[]>;
  criteria;
  value;

  ngOnInit() {
    this.missionsHolder$ = this.provider.getMissions();
  }

  setCriteria(criteria) {
    switch (criteria) {
      case 'status':
        this.valuesHolder$ = this.provider.getStatuses();
        break;
      case 'agency':
        this.valuesHolder$ = this.provider.getAgencies();
        break;
      case 'type':
        this.valuesHolder$ = this.provider.getTypes();
        break;
    }
    this.criteria = criteria;
  }

  setValue(value) {
    this.value = value;
  }
}
