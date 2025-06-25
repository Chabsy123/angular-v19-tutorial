import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  // styleUrl: './user.component.css'
  // used to add multiple css files in a component
  styleUrls: ['./button.style.css', './user.component.css']
})
export class UserComponent {
  // Properties to hold dynamic route parameters from the URL (e.g., /user/:id/:name)
  // Initialized as empty strings ("") to avoid 'undefined' errors in the template
  // and ensure safe rendering before ngOnInit assigns real values.
  // name:string|null="";
  // id:string|null="";
  // constructor( private route:ActivatedRoute){

  // }
  // ngOnInit(){
  //   this.route.params.subscribe((params)=>{
  //     this.name=params['name']
  //     this.id=params['id']
  //   })
  // }

  // Pass data from parent to child using @Input decorators

// Receives 'user' from parent via property binding
@Input() user: string = '';

// Receives 'city' from parent via property binding
@Input() city: string = '';

}
