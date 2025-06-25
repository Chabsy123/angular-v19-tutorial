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
  // @Input() user: string = '';

  // Receives 'city' from parent via property binding
  // @Input() city: string = '';

  // reuse component
  // if there is no input,NG8002: Can't bind to 'user' since it isn't a known property of 'app-user'.
  // 1. If 'app-user' is an Angular component and it has 'user' input, then verify that it is included in the '@Component.imports' of this component.
  // 2. If 'app-user' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@Component.schemas' of this component to suppress this message.
  // 3. To allow any property add 'NO_ERRORS_SCHEMA' to the '@Component.schemas' of this component.

  @Input() user: string = ''
}
