import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Marvel from '../components/marvel/MarvelScreen'
import Dc from '../components/dc/DcScreen'
import Hero from '../components/hero/HeroScreen'
import Search from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/NavBar'


const DashboardRouter = () => {
  return (
      <>
      <Navbar/>
    <div className='container'>
    <Routes>
        <Route path='marvel' element={<Marvel/>}/>
        <Route path='dc' element={<Dc/>}/>
        <Route path='hero' element={<Hero/>}/>
        <Route path="search" element={<Search />} />
        <Route path="/" element={<Marvel />} />
    </Routes>
    </div>
      </>
    )
}

export default DashboardRouter; 