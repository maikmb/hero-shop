import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import './App.css'
import 'fontsource-roboto'
import theme from './config/theme'
import { Container } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { AppContextProvider } from './state/contexts/app-context'
import useAutoUserZoom from './hooks/useAutoUserZoom'
import DefaultLayout from './pages/DefaultLayout'

export default function App () {
  const userZoom = useAutoUserZoom(window)
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container style={{ zoom: userZoom }}>
          <AppContextProvider>
            <DefaultLayout />
          </AppContextProvider>
        </Container>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}
