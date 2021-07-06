import React from 'react'
import { mock } from '../../config'
import { Nav, NavItem } from './styles'

export default function Menu() {
    return (
        <Nav>{mock.menuOptions.map(opt => <NavItem>{opt}</NavItem>)}</Nav>
    )
}