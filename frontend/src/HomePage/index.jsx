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
      <div
        className="position-absolute h-5_5 w-5_5"
        style={{ top: '72px', right: '15px' }}
      >
        <img
          width="100%"
          height="100%"
          src="https://adplist.org/photos/mentors/2.webp"
          alt=""
          className="rounded-circle"
        />
      </div>
      <div
        className="position-absolute h-5_0 w-5_0"
        style={{ top: '236px', right: '282px' }}
      >
        <img
          width="100%"
          height="100%"
          src="https://adplist.org/photos/mentors/3.webp"
          alt=""
          className="rounded-circle"
        />
      </div>
      <div
        className="position-absolute h-10_5 w-10_5"
        style={{ top: '264px', right: '56px' }}
      >
        <img
          width="100%"
          height="100%"
          src="https://adplist.org/photos/mentors/4.webp"
          alt=""
          className="rounded-circle"
        />
      </div>
      <div
        className="position-absolute h-6_5 w-6_5"
        style={{ top: '578px', right: '374px' }}
      >
        <img
          width="100%"
          height="100%"
          src="https://adplist.org/photos/mentors/5.webp"
          alt=""
          className="rounded-circle"
        />
      </div>
      <div
        className="position-absolute h-5_0 w-5_0"
        style={{ top: '518px', right: '195px' }}
      >
        <img
          width="100%"
          height="100%"
          src="https://adplist.org/photos/mentors/6.webp"
          alt=""
          className="rounded-circle"
        />
      </div>
      <div
        className="position-absolute h-6_5 w-6_5"
        style={{ top: '506px', right: '15px' }}
      >
        <img
          width="100%"
          height="100%"
          src="https://adplist.org/photos/mentors/7.webp"
          alt=""
          className="rounded-circle"
        />
      </div>
    </div>
  )
}

export default index
