import React from 'react';
import './App.css';
import Nav from './Nav';
import MyOrder from './MyOrder';
import Cart from './Cart';
import Home from './Home';
import BookDetails from './BookDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Router>
        <div className='App'>
            <Nav />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/myorder' component={MyOrder} />
                <Route path='/cart' component={Cart} />
                <Route path='/bookdetails:id' component={BookDetails}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
