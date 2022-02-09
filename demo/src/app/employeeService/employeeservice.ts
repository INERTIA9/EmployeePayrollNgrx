import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../model/employees.model";

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    url: string = 'http://localhost:3000/employees'
    constructor(private http: HttpClient) {

    }
    getPost() {
        return this.http.get(this.url)
    }
    addPost(data: any) {
        return this.http.post(this.url, data)
    }

    deletePost(id: string) {
        console.log(id);
        return this.http.delete(`${this.url}/${id}`)
    }
    updatePost(payload: any) {
        let id = localStorage.getItem('id')
        return this.http.put(`${this.url}/${id}`, payload)
    }

}
