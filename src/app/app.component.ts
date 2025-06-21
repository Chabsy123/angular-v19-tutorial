import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserComponent } from './user/user.component';

// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // for any component to be used, it has to be imported from the app component.
  imports: [LoginComponent, SignupComponent, ProfileComponent, UserComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // this is where the values is defined to be used as dynamic data in html
  title = 'Code Step-by-step';
  name = 'Chukwu Sydney';
  data = 100;
  data2 = 200;
  user1 = 'chabsy';
  user2 = 'madara';
  // defining data type for a property and also multiple data type as well using a pipe
  data3: number | string = 43;
  userLogin: boolean = true;
  info: any = "this is some data"
  //typescript is also smart enough to know that this is a string below
  email = "johndoe@example.com"

  // any means any data type
  pineapple() {
    this.data3 = "abc"
    this.info = 2121

    //few moments later
    this.info = true

    //
    this.info = []
  }
  // variables can be declared inside functions but cant be used outside the function.
  hello() {
    let x = 10;
    const y = 20;
    var data = 30;
  }
  // when making functions in classes the function keyword is not needed
  handleClickEvent() {
    // alert("Function Called");
    console.log("Function Called");
    // use the this keyword if you want to call a function inside a class or another function as far as they are in the same class(calling a function from another function) e.g
    this.handleClickEvent()
    this.otherFunction()
  }
  //   Defining data types is telling the variable what kind of data you want to store. in e.g string is what will be assigned to the variable and it applies to wherever you use it.
  firstname: string = "Confucius"
  otherFunction() {
    console.log("other function")
    // if it is not a string it will throw an error cause it expects a string value and nothing else.You cannot directly define a variable in a class but it can be done inside a function itself i.e you cant do this: let firstname:string = "Confucius"
    this.firstname = "30";
  }
  // if its not defined it will throw an error
  sum(a: number, b: number) {
    console.log(a + b);
  }
  // count app
  // where the number will increment, decrement and reset
  count: number = 0;
  // functions for increment, decrement and reset
  handleIncrement() {
    this.count += 1;
  }
  handleDecrement() {
    this.count -= 1;
  }
  handleReset() {
    this.count = 0;
  }
  // or just use an if/else statement within a function with parameters for the three of them
  handleCounter(val: string) {
    if (val == 'minus') {
      this.count -= 1
    } else if (val == 'plus') {
      this.count += 1
    } else {
      this.count = 0
    }
  }

  // setting input values
  username = "";
// using a function for an event
  getUserName(event: Event) {
    // to avoid errors and get name properly
      this.username = (event.target as HTMLInputElement).value
      // if this above is commented the getusername function can still make it display as if it is still there.
    // const named = (event.target as HTMLInputElement).value
    // console.log(named);
  }
  // setting the value
  setUserName(){
    this.username = "Peter"
  }
  getUserNameWithTemplate(val:string){
    this.username = val,
    console.log(val)
  }
}
