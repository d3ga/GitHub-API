import React from "react";
import SearchForm from "./SearchForm";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  apiUrl = "https://api.github.com";

  getApiData = query => {
    console.log("Input:", query);
    Axios.get(`${this.apiUrl}/search/users?q=${query}`)
      .then(response => console.log(response))

      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <img
          id="github-logo"
          src="./images/GitHub_logo.png"
          width="200"
          height="auto"
          alt="this is the logo of GitHub"
        />
        <SearchForm getApiData={this.getApiData} />
      </div>
    );
  }
}

export default App;
