import React from 'react'
import Categories from './Categories'
import Slider from './Slider'
import './Home.css'

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className="container">
            <Categories/>
            <Slider/>
            <div className="clearFix"></div>
        </div>
      </section>
    </>
  )
}

export default Home
