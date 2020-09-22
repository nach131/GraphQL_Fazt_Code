import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MessageList from './components/MessageList'
import MessageForm from './components/MesageForm'
import { Navigator } from './components/Navbar';

import 'bootswatch/dist/superhero/bootstrap.min.css'

function App() {
  return (
 <Router>
 <Navigator/>
 <div className="container p-4">
 <Switch>
     <Route exact path="/" component={MessageList}/>
     <Route exact path="/new-message" component={MessageForm}/>
   </Switch>
 </div>
 </Router>
  );
}

export default App;
