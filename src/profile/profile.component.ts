import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector:'app-profile',
  // for inline html template
 // template:"<h1>Profile</h1>",
//  to use a html file template to your file
templateUrl:'./profile.component.html',
// to use an inline style to your component(using it again as styling from your component.ts if you do not have much code)
  // styles:"h1{color:Red}",
  // to use a css file for your styling
  styleUrl:'./profile.component.css'
})
export class ProfileComponent {
  userName: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Option 1: Get route parameter (if set using paramMap)
    // this.userName = this.route.snapshot.paramMap.get('name');

    // Option 2: Get value from query parameters (?name=XYZ)
    // this.route.queryParams.subscribe(params => {
    //   console.log(params['name']);
    //   this.userName = params['name'];
    // });

    // Option 3: Get static data from route configuration
    this.route.data.subscribe(params => {
      this.userName = params['name'];
    });
  }
}
