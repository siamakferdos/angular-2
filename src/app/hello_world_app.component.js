//NOTE: We can only one of the @view or template in a component.
System.register(["angular2/core", './template_demo.component', './contact-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, template_demo_component_1, contact_form_component_1;
    var MyHelloWorldClass;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (template_demo_component_1_1) {
                template_demo_component_1 = template_demo_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            }],
        execute: function() {
            MyHelloWorldClass = (function () {
                function MyHelloWorldClass() {
                    this.itemList = [
                        { name: "Apple" },
                        { name: "Orange" },
                        { name: "Grapes" },
                    ];
                    //2)
                    this.val = '';
                    //5)
                    this.values = "Enter some words then press Enter key...";
                }
                MyHelloWorldClass.prototype.onKey = function (event) {
                    this.val += (event.target).value + ' | ';
                };
                MyHelloWorldClass = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n   <h1> 1: SIMPLE NG </h1>\n   <h2>List of Fruits</h2> \n   <ul>\n      <li *ngFor=\"#myItem of itemList\">{{myItem.name}}</li>\n   </ul>   \n\n   <h1> 2: $event </h1>\n   <h2>Key Up Event Example</h2>\n    <input (keyup)=\"onKey($event)\">\n    <p>{{val}}</p>\n\n   <h1> 3: directive </h1>   \n     <my-list></my-list>\n\n   <h1> 4: local variable(by #) </h1>   \n      <h2>Get user input from a local template variable</h2>\n\n    <!--declare a local template variable by preceding an identifier with a hash character (#)-->\n    <input #key_val (keyup)=\"0\">\n\n    <!-- The key_val variable is a reference to the <input> element itself, and grab the input element's value and display it with interpolation between <p> tags -->\n    <p>{{key_val.value}}</p>\n\n   <h1> 5: Key Event Filtering </h1>   \n    <input #myval (keyup.enter)=\"values=myval.value\">\n    <p>{{values}}</p>\n\n    <contact-form></contact-form>\n   ",
                        //3)
                        //Use other component we use directives
                        //Note: The template will appear where selector apear in caller file.
                        directives: [template_demo_component_1.ItemListComponent, contact_form_component_1.ContactComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyHelloWorldClass);
                return MyHelloWorldClass;
            }());
            exports_1("MyHelloWorldClass", MyHelloWorldClass);
        }
    }
});
//# sourceMappingURL=hello_world_app.component.js.map