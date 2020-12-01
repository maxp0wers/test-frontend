import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { formatCurrency } from '@angular/common';

export class Rank {
  constructor(
    public winners: number,
    public specialPrize: number,
    public prize: number,
  ) {
  }
}

export class DrawOdds {
  constructor(
    public full: string,
    public rank0: Rank,
    public rank1: Rank,
    public rank2: Rank,
    public rank3: Rank,
    public rank4: Rank,
    public rank5: Rank,
    public rank6: Rank,
    public rank7: Rank,
    public rank8: Rank,
    public rank9: Rank,
    public rank10: Rank,
    public rank11: Rank,
    public rank12: Rank,
  ) {
  }
}

export class DrawDate {
  constructor(
    public full: string,
    public day: number,
    public month: number,
    public year: number,
    public hour: number,
    public minute: number,
    public dayOfWeek: string,
  ) {
  }
}

export class DrawResult {
  constructor(
    public nr: number,
    public currency: string,
    public date: DrawDate,
    public closingDate: Date,
    public lateClosingDate: Date,
    public drawingDate: Date,
    public numbers: number[],
    public euroNumbers: number[],
    public jackpot: string,
    public marketingJackpot: string,
    public specialMarketingJackpot: string,
    public climbedSince: number,
    public Winners: number,
    public odds: DrawOdds,
    public formattedResults: any[],
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class DrawResultAdapter implements Adapter<DrawResult> {
  adapt(item: any): DrawResult {
    return new DrawResult(
      item.last[0].nr,
      item.last[0].currency,
      item.last[0].date,
      item.last[0].closingDate,
      item.last[0].lateClosingDate,
      item.last[0].drawingDate,
      item.last[0].numbers,
      item.last[0].euroNumbers,
      item.last[0].jackpot,
      item.last[0].marketingJackpot,
      item.last[0].specialMarketingJackpot,
      item.last[0].climbedSince,
      item.last[0].Winners,
      item.last[0].odds,
      [
        {
          tier: 'I',
          match: `5 Numbers + 2 Euronumbers`,
          winners: `${item.last[0].odds.rank1.winners}x`,
          amount: formatCurrency(item.last[0].odds.rank1.prize, 'en', '€'),
        },
        {
          tier: 'II',
          match: `5 Numbers + 1 Euronumbers`,
          winners: `${item.last[0].odds.rank2.winners}x`,
          amount: formatCurrency(item.last[0].odds.rank2.prize, 'en', '€'),
        },
        {
          tier: 'III',
          match: `5 Numbers + 0 Euronumbers`,
          winners: `${item.last[0].odds.rank3.winners}x`,
          amount: formatCurrency(item.last[0].odds.rank3.prize, 'en', '€'),
        },
        {
          tier: 'IV',
          match: `4 Numbers + 2 Euronumbers`,
          winners: `${item.last[0].odds.rank4.winners}x`,
          amount: formatCurrency(item.last[0].odds.rank4.prize, 'en', '€'),
        },
        {
          tier: 'V',
          match: `4 Numbers + 1 Euronumbers`,
          winners: `${item.last[0].odds.rank5.winners}x`,
          amount: formatCurrency(item.last[0].odds.rank5.prize, 'en', '€'),
        },
        {
          tier: 'VI',
          match: `4 Numbers + 0 Euronumbers`,
          winners: `${item.last[0].odds.rank6.winners}x`,
          amount: formatCurrency(item.last[0].odds.rank6.prize, 'en', '€'),
        },
        {
          tier: 'VII',
          match: `3 Numbers + 2 Euronumbers`,
          winners: `${item.last[0].odds.rank7.winners}x`,
          amount: formatCurrency(item.last[0].odds.rank7.prize, 'en', '€'),
        },
        {
          tier: 'VIII',
          match: `2 Numbers + 2 Euronumbers`,
          winners: `${item.last[0].odds.rank8.winners}x`,
          amount: formatCurrency(item.last[0].odds.rank8.prize, 'en', '€'),
        },
        {
          tier: 'IX',
          match: `3 Numbers + 1 Euronumbers`,
          winners: `${item.last[0].odds.rank9.winners}x`,
          amount: formatCurrency(item.last[0].odds.rank9.prize, 'en', '€'),
        },
        {
          tier: 'X',
          match: `3 Numbers + 0 Euronumbers`,
          winners: `${item.last[0].odds.rank10.winners}x`,
          amount: formatCurrency(item.last[0].odds.rank10.prize, 'en', '€'),
        },
        {
          tier: 'XI',
          match: `1 Numbers + 2 Euronumbers`,
          winners: `${item.last[0].odds.rank11.winners}x`,
          amount: formatCurrency(item.last[0].odds.rank11.prize, 'en', '€'),
        },
        {
          tier: 'XII',
          match: `2 Numbers + 1 Euronumbers`,
          winners: `${item.last[0].odds.rank12.winners}x`,
          amount: formatCurrency(item.last[0].odds.rank12.prize, 'en', '€'),
        },
      ],
    );
  }
}
