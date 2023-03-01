import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

const TabsReuse = ({ TabsArray }) => {
  return (
    <Tabs
      defaultActiveKey={TabsArray[0].name}
      id="uncontrolled-tab-example"
      className="mb-3 tabs"
    >
      {TabsArray.map((tab) => {
        return (
          <Tab eventKey={tab.name} title={tab.name}>
            {tab.component}
          </Tab>
        )
      })}
    </Tabs>
  )
}

export default TabsReuse
