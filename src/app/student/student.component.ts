import { Component, OnInit } from '@angular/core';
import studentsData from './students.json';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = studentsData;

  constructor() { }

  ngOnInit(): void {
  }

}
