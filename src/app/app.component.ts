import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // this is where the values is defined to be used as dynamic data in html
  title = 'Code Step-by-step';
  name = 'Chukwu Sydney';
  data = 100;
  data2= 200;
  user1= 'chabsy';
  user2='madara';
// variables can be declared inside functions but cant be used outside the function.
  hello(){
    let x =10;
    const y=20;
    var data=30;
  }
}
