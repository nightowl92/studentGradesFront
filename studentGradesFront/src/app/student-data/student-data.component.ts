import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getClassNames();
  }

  getClassNames() {
    this.http.get<any>('http://47.94.96.123/api/studentgradesapp/classnames/').subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error('There was an error!', error);
      }
    );

  }
}
