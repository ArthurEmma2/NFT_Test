import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error'


function Router() {
  return (
    <main>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='*'  element={<Error />}/>
      </Routes>
    </main>
  )
}

export default Router