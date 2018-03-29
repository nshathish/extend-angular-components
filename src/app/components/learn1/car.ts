import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class Car {
  num: number;

  constructor(http: HttpClient) {
    this.num = Math.floor(Math.random() * 1000);
  }
}
