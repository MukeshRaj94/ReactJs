import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
    };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("Component Mount called");
  }
  render() {
    console.log("render called");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h2>Location: {location}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count : {count}
        </button>
      </div>
    );
  }
}

export default UserClass;
