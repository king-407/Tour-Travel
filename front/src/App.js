import { Navbar } from "./Components/Navbar";
import Notestate from "./Components/context/Notestate";
import Signup from "./Components/Signup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Intro from "./Components/Intro";
function App() {
  return (
   
    <Notestate>                  
    <Router>
    <Navbar/>
    
    <div>
    <Switch>
    <Route exact  path="/">
            <Intro /> 
         </Route>
    <Route exact  path="/diary">
            <Home />
          </Route>
          <Route exact  path="/login">
            <Login />
          </Route>
          <Route exact  path="/signup">
            <Signup />
          </Route>
         </Switch>
    
     
    </div>
    
    </Router>
    </Notestate>
   
  );
}

export default App;
