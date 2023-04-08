import { Injectable } from '@angular/core';
import { Student } from './student';

import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StudentService {
    constructor(private http: HttpClient){}

    toTheBackend():Observable<Student>{
        return this.http.get<Student>("https://catfact.ninja/fact");
    }

    getStudent(id: number): Student {
        let student: Student = new Student;
        if (id === 1) {
             student.firstName = "Jynn";
             student.lastName = "Erso";
        } else if (id === 2) {
             student.firstName = "Frodo";
             student.lastName = "Baggins";
        } 
        return student;
   }

}