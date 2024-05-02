import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "India",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Mukeshraj94");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
