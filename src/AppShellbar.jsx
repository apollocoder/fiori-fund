import { Menu, Shellbar } from 'fundamental-react'
import React from 'react'

export const AppShellbar = () => (
  <Shellbar
    actions={[
      {
        glyph: 'settings',
        label: 'Settings',
        notificationCount: 5,
        menu: (
          <Menu>
            <Menu.List>
              <Menu.Item url="#">Option 1</Menu.Item>
              <Menu.Item url="#">Option 2</Menu.Item>
              <Menu.Item url="#">Option 3</Menu.Item>
            </Menu.List>
          </Menu>
        )
      }
    ]}
    copilot
    logoSAP
    productSwitch={{
      label: 'Product Switch'
    }}
    productSwitchList={[
      {
        title: 'Fiori Home',
        subtitle: 'Central Home',
        image: './assets/01.png',
        selected: true,
        glyph: 'home'
      },
      {
        title: 'S/4 HANA Cloud',
        image: './assets/02.png',
        glyph: 'cloud'
      },
      {
        title: 'Analytics Cloud',
        subtitle: 'Analytics Cloud',
        image: './assets/03.png',
        glyph: 'business-objects-experience'
      },
      {
        title: 'Ariba',
        image: './assets/04.png',
        glyph: 'activate'
      },
      {
        title: 'SuccessFactors',
        image: './assets/05.png',
        glyph: 'message-success'
      },
      {
        title: 'Commerce Cloud',
        image: './assets/06.png',
        glyph: 'retail-store'
      },
      {
        title: 'Gigya',
        image: './assets/07.png',
        glyph: 'customer-view'
      },
      {
        title: 'Callidus Cloud',
        image: './assets/08.png',
        glyph: 'globe'
      },
      {
        title: 'Fieldglass',
        image: './assets/09.png',
        glyph: 'work-history'
      },
      {
        title: 'Concur',
        image: './10.png',
        glyph: 'area-chart'
      },
      {
        title: 'Cloud for Customer',
        image: './11.png',
        glyph: 'customer-view'
      },
      {
        title: 'Cloud Portal',
        image: './12.png',
        glyph: 'customer'
      }
    ]}
    productTitle="OST Portal"
    searchInput={{
      label: 'Search',
      placeholder: 'Search'
    }}
    subtitle="A Fiori Application"
  />
)
