import React from 'react'
import SearchBar from '../../_components/SearchBar/SearchBar'

const Mentee = () => {
  return (
    <div className="">
      <div className="mentee-content">
        <h1 className="text-info fw-bold mentee-title">
          Hobbies can take you places learn and grow from expert mentors.
        </h1>
        <h4 className="text-info mentee-subtitle fw-normal text-start mb-0">
          Book and meet mentors for community meetups and enjoy your hobbies.
        </h4>
      </div>
      <SearchBar />
    </div>
  )
}

export default Mentee
