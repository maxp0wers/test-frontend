import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../core/services/api.service';

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
    const t = new Date().getDate() + (6 - new Date().getDay() - 3) - 7;
    const lastFriday = new Date();
    lastFriday.setDate(t);

    this.items = this.getLatestDraws(lastFriday, 10).map(date => {
      return {value: this.api.formatDate(date, '-'), display: this.api.formatDate(date, '-')};
    });
  }

  onSelect(selectedItem) {
    this.router.navigate(['results', selectedItem]);
  }

  getLatestDraws(lastFriday: Date, n: number): Date[] {
    const dates = new Array();
    for (let i = 0; i < n; i++) {
      dates.push(new Date(lastFriday));
      lastFriday.setDate(lastFriday.getDate() - 7);
    }
    return dates;
  }

}
