var React = require('react');

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      };
    });
  }

  render() {
    var languages = ['All', 'JS', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
    //<ul className="languages">
    //  {languages.map(function (lang) { // when you use common function you have yo pass this as a second argument to the .map() function to recognize the object that is referring
    //    return <li
    //      style={lang === this.state.selectedLanguage ? {color: '#ff0000'}: null}
    //      onClick={this.updateLanguage.bind(null, lang)}// the null is the context, lang is the argument
    //      key={lang}>
    //      {lang}
    //    </li>
    //  }), this}  // here you pass the this argument to be able to call updateLanguage function
    //</ul>

      <ul className="languages">
        {languages.map((lang) => { // when you write it as an arrow function the this context is the same than outside, then you don't have to pass the this object as a second parameter for the map function
          return <li
            style={lang === this.state.selectedLanguage ? {color: '#ff0000'}: null}
            onClick={this.updateLanguage.bind(null, lang)}// the null is the context, lang is the argument
            key={lang}>
            {lang}
          </li>
        })}
      </ul>

    );
  }
}

module.exports = Popular;