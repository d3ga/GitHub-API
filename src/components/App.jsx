import React, { Fragment } from "react";
import SearchForm from "./SearchForm";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      submit: false
    };
  }

  apiUrl = "https://api.github.com";

  getApiData = query => {
    console.log("Input:", query);
    Axios.get(`${this.apiUrl}/search/users?q=${query}`)
      .then(response => {
        this.setState(state => {
          state.data = response.data.items;
          console.log("Axios", response, "State:", state.data.items);
          state.submit = true;
          return state;
        });
      })

      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <Fragment>
        <img
          id="github-logo"
          src="./images/GitHub_logo.png"
          width="200"
          height="auto"
          alt="this is the logo of GitHub"
        />
        <SearchForm getApiData={this.getApiData} state={this.state} />
      </Fragment>
    );
  }
}

export default App;
