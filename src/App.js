import React from "react";
import './App.css'
import Home from "./component/Home/Home";
import { Route, Redirect } from 'react-router-dom'
import Search from "./component/Search/Search";
import { useStateValue } from "./worker/StateProvider";

function App() {

  const [{term}] = useStateValue()
  console.log('state:  '+term);

  return term ?  (<>
        <Route path='/search' exact component={Search} />
        <Redirect to='/search' />
      </>)
      :
    (<>
        <Route path='/home' exact component={Home} />
        <Redirect to='/home' />
    </>)
}

export default App;
