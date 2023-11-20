import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Creative Manager</title>
        <meta property="og:title" content="Global Creative Manager" />
      </Helmet>
    </div>
  )
}

export default Home
