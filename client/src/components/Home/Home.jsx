import React, {useContext } from 'react'
import { DataContext } from '../../DataContext'


const Home = () => {
  const { web3Handler, account } = useContext(DataContext)
  return (
    <div className="home-container">
      <h1 className="med-eth-title">med_eth</h1>
      {account ?
        <button className="login-button">
          <a href="/profile" className="account-text">{account}</a>
        </button>
        :
        <button className="login-button" onClick={web3Handler}>
          Login
        </button>
      }
    </div>
  )
}

export default Home
