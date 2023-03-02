import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

const TabsReuse = ({ TabsArray }) => {
  return (
    <Tabs
      defaultActiveKey={TabsArray[0].name}
      id="uncontrolled-tab-example"
      className="mb-4 tabs"
    >
      {TabsArray.map((tab, index) => {
        return (
          <Tab eventKey={tab.name} title={tab.name} key={index}>
            {tab.component}
          </Tab>
        )
      })}
    </Tabs>
  )
}

export default TabsReuse
