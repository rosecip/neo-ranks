import React, { useState, useEffect } from 'react'
import MemberTile from "./MemberTile"

const MemberList = () => {
  const [members, setMembers] = useState([])

  const fetchMembers = async () => {
  try {
    const response = await fetch("/api/v1/members")
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw error
    }
    const responseBody = await response.json()
    setMembers(responseBody.members)
  } catch (error) {
    console.log(`error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchMembers()
  }, [])

  const memberList = members.map((member) => {
    return (
      <li>
        <MemberTile member={member} />
      </li>
    )
  })

  return (
    <div>
      <ul>
      {memberList}
      </ul>
    </div>
  )
}

export default MemberList