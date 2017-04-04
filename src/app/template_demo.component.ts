import {Component} from "angular2/core";

@Component({
   selector:'my-list', //This selector must apear in it's caller as a tag
   template:`
     Begin component 2:
      <ul>
         <li *ngFor="#listItem of listItems"
            (click)="onItemClicked(listItem)">{{listItem.name}}
         </li>
      </ul>
      <input type="text" [(ngModel)]="selectedItem.name">
      <button (click)="onDeleteItem()">Delete Item</button><br><br>
      <input type="text" #listItem>
      <button (click)="onAddItem(listItem)">Add Item</button>
   `
})

export class ItemListComponent{
   public listItems = [
      {name:"apple"},
      {name:"orange"},
      {name:"grapes"},
   ];
   public selectedItem = {name: ""};

   onItemClicked(listItem){
      this.selectedItem=listItem;
   }

   onAddItem(listItem){
      this.listItems.push({name:listItem.value});
   }

   onDeleteItem(){
      this.listItems.splice(this.listItems.indexOf(this.selectedItem),1);
   }
}