import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  getUsers():any[]
  {
    let arr : any[] = [{id: 1, name: "test"}];
    return arr;
  }
}
