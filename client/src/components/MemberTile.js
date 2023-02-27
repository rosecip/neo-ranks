import React from "react"

const MemberTile = (props) => {
  return (
    <div>
      <p>{props.member.name}</p>
      <p>{props.member.birthName}</p>
    </div>
  )
}

export default MemberTile