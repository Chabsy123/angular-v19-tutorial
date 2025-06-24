import { Component, effect, signal, } from '@angular/core';
// when using signals remember to import as well
// import forms module when doing two way binding as well
// import { FormsModule } from '@angular/forms';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { ProfileComponent } from '../profile/profile.component';
// import { UserComponent } from './user/user.component';
import { NgFor, NgIf } from '@angular/common';

// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // for any component to be used, it has to be imported from the app component.
  // for directives, depending on the one you want to use import them as well
  imports: [NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // this is where the values is defined to be used as dynamic data in html
  // title = 'Code Step-by-step';
  // name = 'Chukwu Sydney';
  // data = 100;
  // data2 = 200;
  // user1 = 'chabsy';
  // user2 = 'madara';
  // defining data type for a property and also multiple data type as well using a pipe
  // data3: number | string = 43;
  // userLogin: boolean = true;
  // info: any = "this is some data"
  //typescript is also smart enough to know that this is a string below
  // email = "johndoe@example.com"

  // "any" means any data type
  // pineapple() {
  //   this.data3 = "abc"
  //   this.info = 2121

  //few moments later
  // this.info = true

  //
  // this.info = []
  // }
  // variables can be declared inside functions but cant be used outside the function.
  // hello() {
  //   let x = 10;
  //   const y = 20;
  //   var data = 30;
  // }
  // when making functions in classes the function keyword is not needed
  // handleClickEvent() {
  // alert("Function Called");
  // console.log("Function Called");
  // use the this keyword if you want to call a function inside a class or another function as far as they are in the same class(calling a function from another function) e.g
  // this.handleClickEvent()
  // this.otherFunction()
  // }
  //   Defining data types is telling the variable what kind of data you want to store. in e.g string is what will be assigned to the variable and it applies to wherever you use it.
  // firstname: string = "Confucius"
  // otherFunction() {
  //   console.log("other function")
  // if it is not a string it will throw an error cause it expects a string value and nothing else.You cannot directly define a variable in a class but it can be done inside a function itself i.e you cant do this: let firstname:string = "Confucius"
  //   this.firstname = "30";
  // }
  // if its not defined it will throw an error
  // sum(a: number, b: number) {
  //   console.log(a + b);
  // }
  //  count app
  // where the number will increment, decrement and reset
  // count: number = 0;
  // functions for increment, decrement and reset for counter app
  // handleIncrement() {
  //   this.count += 1;
  // }
  // handleDecrement() {
  //   this.count -= 1;
  // }
  // handleReset() {
  //   this.count = 0;
  // }
  // or just use an if/else statement within a function with parameters for the three of them
  // handleCounter(val: string) {
  //   if (val == 'minus') {
  //     this.count -= 1
  //   } else if (val == 'plus') {
  //     this.count += 1
  //   } else {
  //     this.count = 0
  //   }
  // }

  // setting input values
  // username = "";
  // using a function for an event
  // getUserName(event: Event) {
  // to avoid errors and get name properly
  // this.username = (event.target as HTMLInputElement).value
  // if this above is commented the getusername function can still make it display as if it is still there.
  // const named = (event.target as HTMLInputElement).value
  // console.log(named);
  // }
  // setting the value
  // setUserName(){
  //   this.username = "Peter"
  // }
  // getUserNameWithTemplate(val:string){
  //   this.username = val,
  //   console.log(val)
  // }
  // to hide the display of a content
  // display =true
  // val =10

  // hide(){
  //   this.display =false
  // }
  // to bring the hidden element back function
  // show(){
  //   this.display =true
  // }
  // if its true, it will assign false and if its false it will assign true(basically doing what both the hide and show function does)
  // toggle(){
  //   this.display =!this.display
  // }
  // for the div condition statement, it will change the colors of the div
  //   displayOneDiv = true
  //   toggleDivs(){
  //     this.displayOneDiv = !this.displayOneDiv
  //   }


  // switch statements
  // the color below has to be in the switch statements or else it wont show in the server
  // color="gold"
  // handleColor(val:string){
  //   this.color=val;

  // }

  // event.target refers to the element that triggered the event (in this case, the <input> element).

  // (event.target as HTMLInputElement) is a type assertion in TypeScript — it tells the compiler: “Trust me, this is an <input> element.”

  // .value gets the current text value inside the input.
  // changeColor(event:Event){
  //   this.color = (event.target as HTMLInputElement).value
  // }


  // for loops(first make an array)
  // users=['Anil','Sam','Peter','Clark','Bruce'];
  // students = [
  //   {name:'Anil', age:23, email:'anil@test.com'},
  //   {name:'Sam', age:29, email:'sam@test.com'},
  //   {name:'Bruce', age:34, email:'anil@wayne.com'},
  //   {name:'Clark', age:43, email:'anil@kent.com'},
  // ]
  // getName(name:string){
  //  console.log(name);
  // }

  // function for an event(any can have unintended consequences)
  // handleEvent(event: Event) {
  // Log the type of event triggered (e.g., click, input)
  // console.log("function called", event.type);

  // Access the 'name' attribute of the input element that triggered the event
  // Type assertion is used to treat the event target as an HTMLInputElement
  // console.log("function called", (event.target as HTMLInputElement).value);
  // Logs the current value of the input field that triggered the event.
  // Type assertion tells TypeScript that event.target is an HTMLInputElement so we can safely access `.value`, and for multiple events the event will be event type


  // signals in Angular part
  // data = 100;
  // count = signal(10);
  // prints data value or count value in the console
  // constructor(){
  //   effect(()=>{
  //     console.log(this.count());
  //   })
  // }
  // basic increment and decrement with the help of signal
  // updateValue(val:string){
  // updating normal value
  // this.data = 200
  // updating a signal is not the same way basically.It can be whatever is in the set parameter
  // this.count.set(1000)

  //   if(val == 'dec'){
  //    this.count.set(this.count() - 1)
  //   }else{
  //     this.count.set(this.count() + 1)
  //   }
  // }
  // data types with signals
  // to make it contain different data type in a signal
  // data2 = signal<number | string>(10)
  // another way to do it using writable signals using pipes
  // data2: WritableSignal<number>= signal(10)
  // you can also use computed signals as well
  // counts: Signal<number>=computed(()=>243)
  // how to define data types with signals

  // updateValues(){
  // updating it to a string or number
  // this.data2.set(true)
  // when updating like this using the update method unlike set method it accepts just one data type
  //   this.data2.update(val=>val+10)
  // }

  // computed signals
  // data = computed(()=>21)
  // count = signal(20)

  // x= signal(20);
  // y= signal(30);
  // z= computed(()=>this.x()+this.y());
  // computed or read only signals cannot be updated directly
  // updateValue(){

  //  console.log(this.z());
  //  updating the signal
  //  this.y.set(100);
  //  the updated value has no impact on the z unless with the use of computed signals as seen above
  //  console.log(this.z());
  // }
  // updateXValue(){
  //   this.x.set(1000)
  // }
  // Effects in Angular

  // Define reactive signals
  //userName = signal('anil');        Not used in this example
  // count = signal(0);                Tracks number of button clicks
  //displayHeading = false;           Controls conditional heading display

  // constructor() {
  //   effect(() => {
  // Trigger effect whenever count changes

  // if (this.count() === 2) {
  // If count reaches 2, show heading for 2 seconds
  // this.displayHeading = true;

  // setTimeout(() => {
  //   this.displayHeading = false;
  // }, 2000); // Hide after 2000ms = 2 seconds

  // } else {
  // Otherwise, ensure heading stays hidden
  // this.displayHeading = false;
  //     }
  //   });
  // }

  //  for loop contextual variables
  // array example
  // users=['Anil','Sam','Bruce','Clark','Barry','Diana','Hal','Aang','Obi-Wan']
  // users =[]


  // Two-way binding example
  // name = "Zebulun";

  // Optional alternative: manual binding via event
  // This method updates 'name' based on user input
  // changeName(event: Event) {
  //   const val = (event.target as HTMLInputElement).value;
  //   this.name = val;
  // }

  // TO-DO List Component Logic (TypeScript)

  // task = "meeting by 10AM"; // Bound to the input field using ngModel

  // Array to hold the list of tasks
  // Each task is an object with a unique ID and name
  // taskList: { id: number, name: string }[] = [];

  /**
   * Adds a new task to the list.
   * - Creates a task object with an auto-incremented ID
   * - Uses the current value of the 'task' variable as the task name
   * - Clears the input field after adding
   */
  // addTask() {
  //   this.taskList.push({
  //     id: this.taskList.length + 1, // Unique ID based on list length
  // name: this.task               // Task name from input
  // });
  //
  // this.task = ""; // Reset input after adding task
  // }

  /**
   * Deletes a task from the list by its ID.
   * - Uses Array.filter() to exclude the selected task
   * - Updates the task list with the remaining items
   */
  // deleteTask(id: number) {
  //   this.taskList = this.taskList.filter(item => item.id !== id);
  // }

  // Dynamic styling samples
  // color="green";
  // fontSizeNormal ="20px"
  // fontSizeBig ="60px"
  // size=30

  // zoom=true;
  // zoomToggle(){
  //   this.zoom = !this.zoom;
  // }

  // Directives In Angular
  // defining show to be true or false to display the element on the page as a structural directive
  show = true

 // Simple list of student names for string-based display
students = ["Anil", "Beetroot", "Peter", "Bruce", "Hestia"];

// List of student objects with name, age, and email
studentData = [
  {
    name: 'anil',
    age: 30,
    email: 'anil@test.com'
  },
  {
    name: 'Sam',
    age: 39,
    email: 'Sam@test.com'
  },
  {
    name: 'Bruce',
    age: 20,
    email: 'Bruce@test.com'
  },
  {
    name: 'Hestia',
    age: 22,
    email: 'hestia@test.com'
  },
  {
    name: 'Peter',
    age: 25,
    email: 'Peter@test.com'
  },
];

}
