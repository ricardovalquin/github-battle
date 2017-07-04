var React = require('react');
var Popular = require('./Popular');

class App extends React.Component {
  render() { // everything the render return is the UI for the component
    return (
      <div className="container">
        <h1>Say hello to my little friend!</h1>
        <Popular/>
      </div>
    )
  }
}

module.exports = App;
