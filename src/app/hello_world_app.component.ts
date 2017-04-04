//NOTE: We can only one of the @view or template in a component.

import {Component, View} from "angular2/core";
import {ItemListComponent} from './template_demo.component';
import {ContactComponent} from './contact-form.component';

@Component({
   selector: 'my-app'
   ,
   template:`
   <h1> 1: SIMPLE NG </h1>
   <h2>List of Fruits</h2> 
   <ul>
      <li *ngFor="#myItem of itemList">{{myItem.name}}</li>
   </ul>   

   <h1> 2: $event </h1>
   <h2>Key Up Event Example</h2>
    <input (keyup)="onKey($event)">
    <p>{{val}}</p>

   <h1> 3: directive </h1>   
     <my-list></my-list>

   <h1> 4: local variable(by #) </h1>   
      <h2>Get user input from a local template variable</h2>

    <!--declare a local template variable by preceding an identifier with a hash character (#)-->
    <input #key_val (keyup)="0">

    <!-- The key_val variable is a reference to the <input> element itself, and grab the input element's value and display it with interpolation between <p> tags -->
    <p>{{key_val.value}}</p>

   <h1> 5: Key Event Filtering </h1>   
    <input #myval (keyup.enter)="values=myval.value">
    <p>{{values}}</p>

    <contact-form></contact-form>
   `
    ,
    //3)
    //Use other component we use directives
    //Note: The template will appear where selector apear in caller file.
    directives:[ItemListComponent, ContactComponent] 
    
   
})


// @View({
//   template: '
      // <h1> 1: SIMPLE NG </h1>
      // <h2>Hello {{my_name}} !!</h2>'
// })

export class MyHelloWorldClass {

  //1)
  my_name : 'Siamak!!!'
  public itemList = [
      {name:"Apple"},
      {name:"Orange"},
      {name:"Grapes"},
   ]; 

   //2)
   val='';
    onKey(event:KeyboardEvent) {
    this.val += (event.target).value + ' | ';    
  }

  //5)
  values = "Enter some words then press Enter key..."

}

