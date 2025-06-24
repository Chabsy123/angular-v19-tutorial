import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //  dynamic routing
  users=[
    {
      id:'1',
      name:'Anil',
      age:20,
    },
    {
      id:'7',
      name:'Clark',
      age:26,
    },
    {
      id:'2',
      name:'Sam',
      age:29,
    },
    {
      id:'3',
      name:'Bruce',
      age:25,
    },
    {
      id:'4',
      name:'Diana',
      age:23,
    },
    {
      id:'5',
      name:'Barry',
      age:24,
    },
  ]
}
