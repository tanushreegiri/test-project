import React from 'react'
import Login from '../login/login'
import Logo from '../Logo/logo'
import Search from '../Search/search'

export default function Navbar() {
    return (
        <div className="flex justify-between" >
         <div className="flex inline-block" >
         <Logo/>
         <Search/>
         </div>
         <div>
         <Login/>
         </div>
        </div>
    )
}
