import React, { useState, useEffect } from "react"
import UnitTile from "./UnitTile"
import { Link } from "react-router-dom"

const UnitList = (props) => {
  const [units, setUnits] = useState([])

  const fetchUnits = async () => {
    try {
      const response = await fetch("/api/v1/units")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = newError(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setUnits(responseBody.units)
    } catch (error) {
      console.log(`error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchUnits()
  }, [])

  const unitList = units.map((unit) => {
    return (
      <li>
        <UnitTile unit={unit} />
      </li>
    )
  })

  return (
    <div>
      <h1>units</h1>
      <Link to="/">
        home
      </Link>
      <ul>
      {unitList}
      </ul>
    </div>
  )
}

export default UnitList