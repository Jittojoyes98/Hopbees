import React from 'react'
import TabsReuse from '../_components/TabsReuse/TabsReuse'
import TabsArray from './TabsArray'
const index = () => {
  return (
    <div className="common-wrapper position-relative">
      <div className="home-wrapper">
        <TabsReuse TabsArray={TabsArray} />
      </div>
      <div
        className="position-absolute h-6_5 w-6_5"
        style={{ top: '72px', right: '195px' }}
      >
        <img
          width="100%"
          height="100%"
          src="https://adplist.org/photos/mentors/1.webp"
          alt=""
          className="rounded-circle"
        />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default index
