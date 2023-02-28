import React from 'react'

const Footer = ({ layout }) => {
  return <>{layout === 'login' ? <></> : <div>Footer</div>}</>
}

export { Footer }
