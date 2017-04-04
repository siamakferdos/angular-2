import {bootstrap} from "angular2/platform/browser"
import {MyHelloWorldClass} from "./hello_world_app.component"


// reads the Component metadata, finds the 'app' selector, 
// locates an element tag named app, and loads the application between those tags
bootstrap(MyHelloWorldClass);