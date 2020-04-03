import React from 'react'
import './sass/home.scss'

function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                exact
                activeClassName="active"
                className="nav-link"
                href="/"
              >
                產品列表
              </a>
            </li>
            <li className="nav-item">
              <a
                activeClassName="active"
                className="nav-link"
                href="/product"
              >
                產品
              </a>
            </li>
            <li className="nav-item">
              <a activeClassName="active" className="nav-link" href="/cart">
                購物車
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <h1>
          哈哈哈
      </h1>
    </>
  )
}

export default Home
