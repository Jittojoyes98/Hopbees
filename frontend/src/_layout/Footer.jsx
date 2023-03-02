import React from 'react'

const Footer = ({ layout }) => {
  return <>{layout === 'login' ? <></> : <div className="">Footer</div>}</>
}

export { Footer }
