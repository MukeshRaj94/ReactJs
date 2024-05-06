import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div>
      About
      <UserContext.Consumer>
        {({ loggedInUser }) => {
          <h1>{loggedInUser}</h1>;
        }}
      </UserContext.Consumer>
      <UserClass />
    </div>
  );
};

export default About;
