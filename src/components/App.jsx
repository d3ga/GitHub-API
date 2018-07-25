import React, { Fragment } from "react";
import SearchList from "./SearchList";

class App extends React.Component {
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
        <SearchList />
      </Fragment>
    );
  }
}

export default App;
