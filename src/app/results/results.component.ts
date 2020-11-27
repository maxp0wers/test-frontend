import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';

export interface DrawResult {
  tier: string;
  match: string;
  winners: number;
  amount: number;
}

const DRAW_DATA: DrawResult[] = [
  {tier: 'I', match: 'Match', winners: 2, amount: 1220},
  {tier: 'II', match: 'Match 2', winners: 1, amount: 1220},
  {tier: 'II', match: 'Match 3', winners: 2, amount: 240},
  {tier: 'IV', match: 'Match 4', winners: 4, amount: 120},
  {tier: 'V', match: 'Match 5', winners: 1, amount: 520},
  {tier: 'VI', match: 'Match 6', winners: 2, amount: 620},
  {tier: 'VII', match: 'Match 7', winners: 5, amount: 1920},
];

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  columns: string[] = ['tier', 'match', 'winners', 'amount'];
  data;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    const strDate = this.route.snapshot.paramMap.get('date');
    const date = new Date(strDate);
    this.getData(date);
  }

  getData(date) {
    this.api.getDrawings(date).subscribe( data => {
      this.data = data.last[0].odds;
      console.log('data', data.last[0].odds);
    });
  }

}
