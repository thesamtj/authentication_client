import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly BaseURI = 'http://localhost:58226/api';

  constructor() { }
}
