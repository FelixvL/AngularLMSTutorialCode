import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
	 selector: 'my-student',
	 templateUrl: './student.component.html',
     styleUrls: ['./student.component.css'],
     providers: [StudentService]
})
export class StudentComponent {
    student1: Student = new Student;
    student2?: Student;
    students: Student[] = [];
    fillStudents() {
	    this.students.push(this.student1);
	    this.students.push(this.student2!);
    }
    constructor(private studentService: StudentService) {
        this.student1 = this.studentService.getStudent(1);
        this.student2 = this.studentService.getStudent(2);
    }
    executeRest(){
        this.studentService.toTheBackend().subscribe(
            resp => {
                console.log(resp);
                this.student1.fact = resp.fact;
            }
        );
    }
 }