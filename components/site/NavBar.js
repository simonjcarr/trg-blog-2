import HeaderAuthMenu from "./menus/HeaderAuthMenu"
import HeaderBlogMenus from "./menus/HeaderBlogMenus"
import { useContext } from 'react';
import { AuthContext } from '../../stores/authContext';
export default function NavBar() {
  const { authReady } = useContext(AuthContext)
  return (
    <div className="relative h-28 bg-primary-900 shadow">
      <div className="absolute h-full flex items-center text-primary-300 left-5 text-3xl font-bold">My Blog</div> 
        {authReady && <div className="absolute text-primary-100 right-20 bottom-2 flex">
        <div className="mr-5"><HeaderBlogMenus /></div>
        <HeaderAuthMenu />
      </div>}
    </div>
  )
}
