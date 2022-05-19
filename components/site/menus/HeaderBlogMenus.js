import { useContext } from 'react';
import { AuthContext } from '../../../stores/authContext';
export default function HeaderBlogMenus() {
  const { authReady, user } = useContext(AuthContext)
  return (
    <>
      {authReady &&<div>
        {user && <div className="header-menu-link">New Post</div>}
      </div>}
    </>
  )
}
