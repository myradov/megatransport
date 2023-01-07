import React from 'react'
import Navbar from './Navbar'


const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <main className='relative container max-w-screen-2xl mx-auto bg-gray-400'>{children}</main>
    </>
  )
}

export default Layout
