export class Dishes {
  private _id!: number;
  private _name!: string;
  private _price!: number;
  private _description!: string;
  private _img!: string;


  constructor(id: number, name: string, price: number, description: string, img: string) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._description = description;
    this._img = img;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }
}
