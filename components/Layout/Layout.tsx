import React from 'react'
import Navbar from '../Navbar/Navbar'

type LayoutProps= {
  children?: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='container'>
      <Navbar/>
        {children}
      <footer>This is the footer</footer>
    </div>
  )
}

export default Layout
