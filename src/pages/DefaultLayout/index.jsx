import React from 'react'

import 'fontsource-roboto'
import Menu from '../../components/Menu'
import Header from '../../components/Header'
import StoryBoard from '../../components/StoryBoard'
import { useAppState } from '../../state/contexts/app-context'
import Routes from '../../Routes'

export default function DefaultLayout () {
  const { state } = useAppState()
  const { cartItems } = state

  return (
    <>
      <StoryBoard />
      <Header />
      <Menu countTotalItems={cartItems.length} />
      <Routes />
    </>
  )
}
