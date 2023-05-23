import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'any'
})
export class InvalidInjectableService {

  constructor(private httpClient: HttpClient) { }
}
