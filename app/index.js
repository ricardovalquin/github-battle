var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

// a component has
// state
// lifecycle events
// UI

//class App extends React.Component {
//  render() { // everything the render return is the UI for the component
//    return (
//      <div>
//        <h1>Say hello to my little friend!</h1>
//      </div>
//    )
//  }
//}



class Friends extends React.Component {
  render() {
    var friends = this.props.list.filter(function (user) {
      return user.friend === true
    });
    var nonFriends = this.props.list.filter(function (user) {
      return user.friend !== true
    });
    return (
      <div>
        <div className="friends-wp">
          <h2>Friends:</h2>
          <ul>
            {friends.map(function (obj) {
              return <li key={obj.name}>{obj.name}</li>
            })}
          </ul>
        </div>
        <div className="non-friends-wp">
          <h2>Non friends:</h2>
          <ul>
            {nonFriends.map(function (obj) {
              return <li key={obj.name}>{obj.name}</li>
            })}
          </ul>
        </div>
      </div>
    );
  };
}

Friends.propTypes = {
  //list: PropTypes.array.isRequired
  //list: PropTypes.arrayOf(PropTypes.object).isRequired
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
};

class User extends React.Component {
  render() {
    return (
      <div>
        <h1>UserName: {this.props.user.name}</h1>
        <hr/>
        <Friends list={this.props.user.list}/>
      </div>);
  };
}

var user = {
  name: 'Ricardo',
  list: [{name: 'Tyler', friend: true}, {name: 'Ryan', friend: true},
    {name: 'Michael', friend: false}, {name: 'Mikenzi', friend: false},
    {name: 'Jessica', friend: true}, {name: 'Dan', friend: false}]
};

//ReactDOM.render(
//  <User user={user}/>,
//  document.getElementById('app')
//);


class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img}
             alt="Avatar"
             style={{width: 100, height: 100}}
        />
        <h1> Name: {this.props.name}</h1>
        <h3>Username: {this.props.username}</h3>
      </div>
    );
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

//ReactDOM.render(
//  <Badge
//    name="Ricardo"
//    username="ricardovalquin"
//    img="https://avatars2.githubusercontent.com/u/6962562?v=3&s=460"
//  />,
//  document.getElementById('app')
//);

//ReactDOM.render( // this brakes the component because the Badge component waits for an image as a string not as an object
//  <Badge
//    name="Ricardo"
//    username="ricardovalquin"
//    img={{image: "https://avatars2.githubusercontent.com/u/6962562?v=3&s=460"}}
//  />,
//  document.getElementById('app')
//);

ReactDOM.render(
  <div>
    <Badge
      name="Ricardo"
      username="ricardovalquin"
      img={"https://avatars2.githubusercontent.com/u/6962562?v=3&s=460"}
    />
    <User user={user}/>
  </div>,
  document.getElementById('app')
);

