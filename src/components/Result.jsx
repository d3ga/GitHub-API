import React from "react";

class Result extends React.Component {
  render() {
    return this.props.loading ? (
      <div>
        <p>Loading...</p>
      </div>
    ) : (
      <div className="card-columns">
        {console.log("Props:", this.props.data)}
        <div className="card border-light mb-3">
          <div className="card-header">{this.props.data.login}</div>
          <img
            className="card-img-top"
            src={this.props.data.avatar_url}
            alt="User Avatar"
          />
          <div className="card-body">
            <p className="card-text">{this.props.data.repos_url}</p>
            <p className="card-text">followers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
