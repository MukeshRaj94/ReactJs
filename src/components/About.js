import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      About
      <User name="Mukesh" />
      <UserClass name="Mukesh from About" location="Chennai" />
    </div>
  );
};

export default About;
