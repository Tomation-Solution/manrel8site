import { createContext, useContext, useState } from 'react'

export const UIContext = createContext()
export const useUIContext = () => useContext(UIContext)

export const UIProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [subscribe, setSubscribe] = useState(false)
  const [premium, setPremium] = useState(false)

  const value = {
    drawerOpen,
    setDrawerOpen,
    subscribe,
    setSubscribe,
    premium,
    setPremium,
  }

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}
