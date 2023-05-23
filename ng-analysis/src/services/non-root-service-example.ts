import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class NonRootServiceExample {

  constructor(private httpClient: HttpClient) { }
}
