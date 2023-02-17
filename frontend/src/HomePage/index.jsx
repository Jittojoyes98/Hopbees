import React from 'react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <>
      <div>index</div>
      <Link to={"/login"}>Hello</Link>
    </>
  )
}

export default index