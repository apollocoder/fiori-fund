import { Tab, TabGroup } from 'fundamental-react'
import React from 'react'
import './App.css'
import { AppShellbar } from './AppShellbar'
import { ButtonShowCase } from './ButtonShowCase'
import { TableShowCase } from './TableShowCase'

function App() {
  return (
    <div>
      <AppShellbar />
      <div style={style.container}>
        <TabGroup>
          <Tab title="Button Demo" style={style.tab}>
            <ButtonShowCase />
          </Tab>
          <Tab title="Table Demo" style={style.tab}>
            <TableShowCase />
          </Tab>
        </TabGroup>
      </div>
    </div>
  )
}

export default App

const style = {
  container: {
    margin: 20
  },
  tab: {
    paddingBottom: 40
  }
}
