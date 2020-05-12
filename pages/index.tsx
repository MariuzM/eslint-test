import React from 'react'
import { Basic, Combined, Animated, bounce } from '../shared/styles'

const test = css`
  color: blue;
  font-size: 30px !important;
`

const Home = () => {
  return (
    <div>
      <h1 css={test}>Home Page</h1>
    </div>
  )
}

export default Home
