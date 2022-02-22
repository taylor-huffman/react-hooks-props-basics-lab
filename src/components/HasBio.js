import React from "react"

function HasBio(props) {
    if (props.bio) {
      return (
        <p>{props.bio}</p>
      )
    } else {
      return null
    }
  }

  export default HasBio