var axios = require('axios');

module.exports = {
  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+'
      + language +
      '&sort=stars&type=Repositories'
    );
    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      })
  }
};
