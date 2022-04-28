import { Navbar } from "./Components/Navbar";
import Notestate from "./Components/context/Notestate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Components/Home";
function App() {
  return (
   
    <Notestate>                  
    <Router>
    <Navbar/>
    
    <div className="container">
    <Switch>
    <Route exact  path="/">
            <Home />
          </Route>
          
         
         </Switch>
    
     
    </div>
    
    </Router>
    </Notestate>
   
  );
}

export default App;
