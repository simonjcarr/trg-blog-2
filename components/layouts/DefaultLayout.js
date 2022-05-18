import NavBar from './../site/NavBar';

export default function DefaultLayout({ children}) {
  return (
    <>
      <NavBar />
      <main>{ children }</main>
    </>
  )
}

