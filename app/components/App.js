var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');

class App extends React.Component {
  render() { // everything the render return is the UI for the component
    return (
      <Router>
        <div className="container">
          <h1>Say hello to my little friend!</h1>
          <Nav/>
          <Route exact path="/" component={Home}/>
          <Route path="/battle" component={Battle}/>
          <Route path="/popular" component={Popular}/>
        </div>
      </Router>
    )
  }
}

module.exports = App;
