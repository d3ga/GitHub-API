import React, { Fragment } from "react";
import Result from "./Result";

class SearchForm extends React.Component {
  userInputRef = React.createRef();

  handleFormSubmit = e => {
    e.preventDefault();
    let query = this.userInputRef.current.value;
    this.props.getApiData(query);
  };

  render() {
    return (
      <Fragment>
        <div className="form-group">
          <form className="form" onSubmit={this.handleFormSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                ref={this.userInputRef}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit">
                  Go!
                </button>
              </div>
            </div>
          </form>
        </div>

        {this.props.state.submit
          ? Object.keys(this.props.state.data).map(id => {
              return <Result key={id} data={this.props.state.data[id]} />;
            })
          : ""}
      </Fragment>
    );
  }
}

export default SearchForm;
