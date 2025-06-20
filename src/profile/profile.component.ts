import { Component } from "@angular/core";

@Component({
  selector:'app-profile',
  // for inline html template
 // template:"<h1>Profile</h1>",
//  to use a html file template to your file
templateUrl:'./profile.component.html',
// to use an inline style to your component
  // styles:"h1{color:Red}",
  // to use a css file for your styling
  styleUrl:'./profile.component.css'
})

export class ProfileComponent{

}
