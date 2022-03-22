export class ReservationForm {
  private _customer!: number;
  private _date!: Date


  constructor(customer: number, date: Date) {
    this._customer = customer;
    this._date = date;
  }


  get customer(): number {
    return this._customer;
  }

  set customer(value: number) {
    this._customer = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
