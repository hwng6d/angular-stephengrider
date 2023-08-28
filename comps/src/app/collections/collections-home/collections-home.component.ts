import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  data = [
    { name: 'James', age: 22, job: 'Doctor' },
    { name: 'John', age: 22, job: 'Engineer' },
    { name: 'Taylor', age: 22, job: 'Teacher' },
    { name: 'Ken', age: 22, job: 'Engineer' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
