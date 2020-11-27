import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit {
  items;

  constructor(private router: Router, private api: ApiService) {
  }

  ngOnInit(): void {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(new Date().getDate() - 7); // Last week results

    this.items = this.getDates(startDate, endDate).map(date => {
      return {value: this.api.formatDate(date, '-'), display: this.api.formatDate(date, '-')};
    });
  }

  onSelect(selectedItem) {
    this.router.navigate(['results', selectedItem]);
  }

  getDates(startDate: Date, endDate: Date): Date[] {
    const dates = new Array();
    const currentDate = startDate;

    while (currentDate > endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() - 1);
    }
    return dates;
  }

}
