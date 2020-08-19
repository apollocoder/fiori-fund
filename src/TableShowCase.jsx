import {
  Avatar,
  Button,
  Checkbox,
  Menu,
  Popover,
  Table
} from 'fundamental-react'
import React, { useState } from 'react'

export const TableShowCase = () => {
  const [checkedItems, setCheckedItems] = useState({})

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    })
  }

  const handleHeaderChange = (event) => {
    const newCheckedItems = {}
    tableRowData.forEach(
      (row) => (newCheckedItems[row.name] = event.target.checked)
    )
    setCheckedItems(newCheckedItems)
  }

  const tableRowData = [
    {
      email: 'user.name@test.com',
      date: '1/10/20',
      name: 'User',
      photoUrl: 'https://robohash.org/green?size=50x50'
    },
    {
      email: 'florence.garcia@qwerty.io',
      date: '10/20/19',
      name: 'Florence',
      photoUrl: 'https://robohash.org/brown?size=50x50'
    },
    {
      email: 'mark.helper@qwerty.io',
      date: '9/15/19',
      name: 'Mark',
      photoUrl: 'https://robohash.org/Q27.png?set=set1&size=50x50'
    },
    {
      email: 'jenna@qwerty.io',
      date: '11/12/19',
      name: 'Jenna',
      photoUrl: 'https://robohash.org/water?&size=50x50'
    }
  ]

  const allItemsChecked =
    Object.keys(checkedItems).length > 0 &&
    !Object.keys(checkedItems).some((key) => !checkedItems[key])

  return (
    <Table
      headers={[
        <Checkbox
          ariaLabel="Select all rows"
          checked={allItemsChecked}
          onChange={handleHeaderChange}
        />,
        'Avatar',
        'email',
        'First Name',
        'Last Name',
        'Date',
        ' '
      ]}
      richTable
      tableData={tableRowData.map((item) => {
        return {
          rowData: [
            <Checkbox
              ariaLabel={'Select row'}
              checked={checkedItems[item.name] || false}
              name={item.name}
              onChange={handleChange}
            />,
            <Avatar backgroundImageUrl={item.photoUrl} size="m" transparent />,
            <a href="/">{item.email}</a>,
            'First Name',
            'Last Name',
            '01/26/20',
            <Popover
              body={
                <Menu>
                  <Menu.List>
                    <Menu.Item url="#">Option 1</Menu.Item>
                    <Menu.Item url="#">Option 2</Menu.Item>
                    <Menu.Item url="#">Option 3</Menu.Item>
                    <Menu.Item url="#">Option 4</Menu.Item>
                  </Menu.List>
                </Menu>
              }
              control={<Button glyph="vertical-grip" option="transparent" />}
              placement="bottom-end"
            />
          ]
        }
      })}
    />
  )
}
