import React from "react";
import Links from "./Links"
import HasBio from "./HasBio"

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <HasBio bio={props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
