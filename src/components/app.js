import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './header.js';
import Default from './default.js';
import Resume from './resume.js';
import Blog from './blog.js';

class App extends Component {
    render() {
      return (
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route path="/blog" component={Blog}/>
            <Route path="/resume" component={Resume} />
            <Route path="/" component={Default} />
          </Switch>
        </div>
      );
    }
};

export default App;