import React from 'react'
import Header from './Header'
import Data from './Data'
import GetData from './GetData'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <>
      <Header/>
      <Outlet/>
      </>
    </div>
  )
}
