import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceMock {

  constructor() { }

  getUsers():any[]
  {
    let arr : any[] = [{id: 1, name: "test"}, {id: 2, name: "test"}];
    return arr;
  }
}
