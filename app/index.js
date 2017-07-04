var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// a component has
// state
// lifecycle events
// UI


class App extends React.Component {
  render() { // everything the render return is the UI for the component
    return (
      <div>
        <h1>Say hello to my little friend!</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
