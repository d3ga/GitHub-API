import React, { Fragment } from "react";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  userNameRef = React.createRef();

  handleClick = e => {
    let userName = this.userNameRef.current.value;
    fetch(`${this.props.ApiURL}/users/${userName}`)
      .then(response => response.json())
      .then(response => {
        this.setState(state => {
          state.data = response;
          console.log(this.state.data);
          return state;
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  renderDetails() {
    return this.state.data.length !== 0 ? (
      <Fragment>
        <div className="card-details">
          <h1 className="card-title d-inline p-2">Repositories</h1>
          <p className="card-text d-inline p-2">
            {this.state.data.public_repos}
          </p>
        </div>
        <div className="card-details">
          <h1 className="card-title d-inline p-2">Followers</h1>
          <p className="card-text d-inline p-2">{this.state.data.followers}</p>
        </div>
        <div className="card-details">
          <h1 className="card-title d-inline p-2">Following</h1>
          <p className="card-text d-inline p-2">{this.state.data.following}</p>
        </div>
        <div className="card-details">
          {this.state.data.location !== null ? (
            <div>
              <h1 className="card-title d-inline p-2">Location</h1>
              <p className="card-text d-inline p-2">
                {this.state.data.location}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="card-details">
          {this.state.data.blog.length !== 0 ? (
            <a
              className="card-title d-inline p-2"
              target="_blank"
              rel="noopener"
              href={
                this.state.data.blog.length !== 0 ? this.state.data.blog : ""
              }
            >
              Website
            </a>
          ) : (
            ""
          )}
        </div>
      </Fragment>
    ) : (
      ""
    );
  }

  render() {
    return this.state.loading ? (
      <div>
        <p>Loading...</p>
      </div>
    ) : (
      <Fragment>
        <div className="card border-light mb-3">
          <div className="card-header" ref={this.userNameRef}>
            {this.props.data.login}
          </div>
          <img
            onClick={this.handleClick}
            className="card-img-top"
            src={this.props.data.avatar_url}
            alt="User Avatar"
          />
          <div className="card-body">{this.renderDetails()}</div>
        </div>
      </Fragment>
    );
  }
}

export default Result;
