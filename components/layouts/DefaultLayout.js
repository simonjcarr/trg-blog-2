import NavBar from './../site/NavBar';

export default function DefaultLayout({ children}) {
  return (
    <div className='min-h-screen flex flex-col'>
        <NavBar />
        <div className="bg-primary-200 flex flex-grow">
          <div className='mx-32 bg-white w-full p-2 shadow text-primary-700'>
            { children }
          </div>
        </div>
    </div>
  )
}

