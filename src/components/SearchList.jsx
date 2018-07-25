import React, { Fragment } from "react";
import SearchForm from "./SearchForm";
import Result from "./Result";

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      submit: false
    };
  }

  ApiURL = "https://api.github.com";

  getApiData = query => {
    fetch(`${this.ApiURL}/search/users?q=${query}`)
      .then(response => response.json())
      .then(response => {
        this.setState(state => {
          state.data = response.items;
          state.submit = true;
          return state;
        });
      })

      .catch(error => {
        console.error(error);
      });
  };

  resetState = () => {
    this.setState(state => {
      state.data = [];
      return state;
    });
  };

  render() {
    return (
      <Fragment>
        <SearchForm
          getApiData={this.getApiData}
          state={this.state}
          resetState={this.resetState}
        />
        <div className="card-columns">
          {this.state.submit
            ? Object.keys(this.state.data).map(id => {
                return (
                  <Result
                    key={id}
                    data={this.state.data[id]}
                    ApiURL={this.ApiURL}
                  />
                );
              })
            : ""}
        </div>
      </Fragment>
    );
  }
}

export default SearchList;
