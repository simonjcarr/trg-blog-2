import HeaderAuthMenu from "./menus/HeaderAuthMenu"
export default function NavBar() {
  return (
    <div className="relative h-28 bg-brown-900 shadow">
      <div className="absolute h-full flex items-center text-brown-100 left-5 text-3xl font-bold">My Blog</div> 
      <div className="absolute text-brown-100 right-20 bottom-2"><HeaderAuthMenu /></div>
    </div>
  )
}
