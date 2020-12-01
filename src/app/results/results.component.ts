import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/services/api.service';
import { DrawResult } from '../core/models/api.models';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  columns: string[] = ['tier', 'match', 'winners', 'amount'];
  loading: boolean;
  data;

  constructor(private route: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit(): void {
    const strDate = this.route.snapshot.paramMap.get('date');
    const date = new Date(strDate);
    this.getData(date);
  }

  getData(date) {
    this.loading = true;
    this.api.getDrawings(date)
      .pipe(
        catchError(error => {
          console.error(error); // handle API errors
          this.loading = false;
          return throwError(error);
        })
      )
      .subscribe((data: DrawResult) => {
        this.loading = false;
        this.data = data.formattedResults;
      });
  }

}
