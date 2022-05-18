import { createContext } from "react"

export default function authContext() {
  const AuthContext = createContext({
    user: null,
    initComplete: false,
    login: () => {},
    logout: () => {},
  })

  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [initComplete, setInitComplete] = useState(false)
    const login = (user) => {
      setUser(user)
    }
    const logout = () => {
      setUser(null)
    }
    return (
      <AuthContext.Provider value={{ user, initComplete, login, logout }}>
        {children}
      </AuthContext.Provider>
    )
  }

  return (
    <div>authContext</div>
  )
}
