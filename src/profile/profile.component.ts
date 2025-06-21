import { Component } from "@angular/core";

@Component({
  selector:'app-profile',
  // for inline html template
 // template:"<h1>Profile</h1>",
//  to use a html file template to your file
templateUrl:'./profile.component.html',
// to use an inline style to your component(using it again as styling from your component.ts if you dont have much code)
  // styles:"h1{color:Red}",
  // to use a css file for your styling
  styleUrl:'./profile.component.css'
})

export class ProfileComponent{

}
