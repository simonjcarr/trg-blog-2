import { useContext } from "react"
import { AuthContext } from '../../../stores/authContext';

export default function HeaderAuthMenu() {
  const { authReady, user, login, logout } = useContext(AuthContext)
  const click = () => {
    console.log("click")
    login()
    console.log("click again")
  }
  return (
    <>
      {authReady && <div className="flex space-x-2">
        {!user && <div className="header-menu-link" onClick={click}>Register</div>}
        {!user && <div className="header-menu-link" onClick={login}>Login</div>}
        {user && <div className="header-menu-link" onClick={logout}>Logout</div>}
      </div>}
    </>
  )
}
