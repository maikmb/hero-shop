import { useMemo } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import { appReducer, defaultAppState } from '../reducers/app-reducer'

const AppContext = createContext()

export function AppContextProvider (props) {
  const [state, dispatch] = useReducer(appReducer, defaultAppState)
  const value = useMemo(() => [state, dispatch], [state])
  return <AppContext.Provider value={value} {...props} />
}

export function useAppState () {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error(`useAppState must be used within a AppContext`)
  }
  const [state, dispatch] = context

  return { state, dispatch }
}
