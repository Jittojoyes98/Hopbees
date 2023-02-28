import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import SearchBar from '../_components/SearchBar/SearchBar/SearchBar'

const index = () => {
  return (
    <div className="common-wrapper home-wrapper">
      <div>
        <Tabs
          defaultActiveKey="Mentee"
          id="uncontrolled-tab-example"
          className="mb-3 tabs"
        >
          <Tab eventKey="Mentee" title="Mentee">
            <h1>Heyy</h1>
          </Tab>
          <Tab eventKey="Mentor" title="Mentor">
            <h1>Heyyer</h1>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default index
