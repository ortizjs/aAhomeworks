import React from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom';

import Red from './red';
import Green from './green';
import Blue from './blue';
import Violet from './violet';

class Rainbow extends React.Component {
  render() {
    return (
      <div id="rainbow">
        <h1>Rainbow Router!</h1>
        {/* Your links should go here */}
        <NavLink to='/red' >Red</NavLink>
        <Link to='/green' >Green</Link>
        <NavLink to='/red/yellow' >Add Yellow</NavLink>
        <NavLink to='/blue/indigo' >Add Indigo</NavLink>


        <div id="rainbow">
        <Route path="/red" component={Red} />
        <Route path="/green" component={(Green)} />
        <Route path="/blue" component={(Blue)} />
        <Route path="/violet" component={(Violet)} />
          {/* Your routes should go here */}
        </div>
      </div>
    );
  }
};

export default Rainbow;
