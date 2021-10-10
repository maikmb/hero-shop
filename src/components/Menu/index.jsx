import React from 'react'
import { mock } from '../../config'
import { Nav, NavItem, NavOptions } from './styles'
import { Badge, IconButton } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

export default function Menu () {
  return (
    <Nav>
      <NavOptions>
        {mock.menuOptions.map(opt => (
          <NavItem>{opt}</NavItem>
        ))}
      </NavOptions>
      <NavOptions>
        <IconButton color='primary' aria-label='add to shopping cart'>
          <Badge badgeContent={4} color='primary'>
            <ShoppingCart color='action' />
          </Badge>
        </IconButton>
      </NavOptions>
    </Nav>
  )
}
