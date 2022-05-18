import { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

export const AuthContext = createContext({
    user: null,
    login: () => {
      netlifyIdentity.open()
    },
    logout: () => {
      netlifyIdentity.logout()
    },
    authReady: false
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [authReady, setAuthReady] = useState(false)

  useEffect(() => {
    console.log("Use effect")
    netlifyIdentity.on('login', (user) => {
      setUser(user)
      netlifyIdentity.close()
    })

    netlifyIdentity.on('logout', () => {
      setUser(null)
      netlifyIdentity.close()
    })

    netlifyIdentity.on('init', (user) => {
      console.log("netlify init", user)
      setUser(user)
      setAuthReady(true)
    })
    
    netlifyIdentity.init()

    return () => {
      netlifyIdentity.off('login')
      netlifyIdentity.off('logout')
      netlifyIdentity.off('init')
    }
  }, [])

  const login = () => {
    netlifyIdentity.open()
  }

  const logout = () => {
    netlifyIdentity.logout()
  }

  const context = { user, login, logout, authReady }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )

}