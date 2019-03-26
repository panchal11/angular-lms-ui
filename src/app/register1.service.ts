import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(
    private httpClient: HttpClient
  ) { }

  users=["abc","xyz","hjk"];

  getUsers() {
    return this.httpClient.get('https://api.github.com/users');
  }

}