import { useContext } from "react"
import { AuthContext } from '../../../stores/authContext';

export default function HeaderAuthMenu() {
  const { user, login, logout, something} = useContext(AuthContext)
  const click = () => {
    console.log("click")
    login()
    console.log("click again")
  }
  return (
    <>
      <div className="flex space-x-2">
        <div className="header-menu-link" onClick={click}>Register</div>
        <div className="header-menu-link" onClick={login}>Login</div>
        <div className="header-menu-link" onClick={logout}>Logout</div>
      </div>
    </>
  )
}
