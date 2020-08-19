import { Button } from 'fundamental-react'
import React from 'react'

export const ButtonShowCase = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      rowGap: 10,
      columnGap: 10
    }}
  >
    <Button>Default</Button>
    <Button selected>Selected</Button>
    <Button disabled>Disabled</Button>
    <Button
      allowFocusOnDisable
      disabled
      disabledMessage="To enable this button use the knob in the dev story"
      enabledMessage="This button is now enabled"
    >
      Disabled Focusable
    </Button>
    <Button option="emphasized">Emphasized</Button>
    <Button option="emphasized" selected>
      Emphasized
    </Button>
    <Button disabled option="emphasized">
      Emphasized
    </Button>
    <Button
      allowFocusOnDisable
      disabled
      disabledMessage="To enable this button use the knob in the dev story"
      enabledMessage="This button is now enabled"
      option="emphasized"
    >
      Emphasized Focusable
    </Button>
    <Button option="transparent">Transparent</Button>
    <Button option="transparent" selected>
      Transparent
    </Button>
    <Button disabled option="transparent">
      Transparent
    </Button>
    <Button
      allowFocusOnDisable
      disabled
      disabledMessage="To enable this button use the knob in the dev story"
      enabledMessage="This button is now enabled"
      option="transparent"
    >
      Transparent Focusable
    </Button>
    <Button type="positive">Positive Button</Button>
    <Button selected type="positive">
      Positive Button
    </Button>
    <Button disabled type="positive">
      Positive Button
    </Button>
    <Button
      allowFocusOnDisable
      disabled
      disabledMessage="To enable this button use the knob in the dev story"
      enabledMessage="This button is now enabled"
      type="positive"
    >
      Positive Focusable
    </Button>
    <Button type="negative">Negative Button</Button>
    <Button selected type="negative">
      Negative Button
    </Button>
    <Button disabled type="negative">
      Negative Button
    </Button>
    <Button
      allowFocusOnDisable
      disabled
      disabledMessage="To enable this button use the knob in the dev story"
      enabledMessage="This button is now enabled"
      type="negative"
    >
      Negative Focusable
    </Button>
    <Button type="ghost">Ghost Button</Button>
    <Button selected type="ghost">
      Ghost Button
    </Button>
    <Button disabled type="ghost">
      Ghost Button
    </Button>
    <Button
      allowFocusOnDisable
      disabled
      disabledMessage="To enable this button use the knob in the dev story"
      enabledMessage="This button is now enabled"
      type="ghost"
    >
      Ghost Focusable
    </Button>
    <Button type="attention">Attention Button</Button>
    <Button selected type="attention">
      Attention Button
    </Button>
    <Button disabled type="attention">
      Attention Button
    </Button>
    <Button
      allowFocusOnDisable
      disabled
      disabledMessage="To enable this button use the knob in the dev story"
      enabledMessage="This button is now enabled"
      type="attention"
    >
      Attention Focusable
    </Button>
  </div>
)
