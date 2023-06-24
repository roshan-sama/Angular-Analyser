import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ProjectDataService {

    constructor(private httpClient: HttpClient) { }

    getProjectData() {
        return this.httpClient.get('http://localhost:3000/api/project-data');
    }
}
