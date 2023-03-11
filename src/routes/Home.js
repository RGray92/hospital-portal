import React from 'react'
import CircleNav from '../components/CircleNav';

function Home() {
  return (
    <div className='home'>
      <h2>Welcome to the Clyde Childrens Hospital Portal!</h2>
      <h3>Which page would you like to visit?</h3>
      <CircleNav />
    </div>
  )
}

export default Home;