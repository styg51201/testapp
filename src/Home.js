import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import './sass/home.scss'

function Home() {
  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          logo
        </Link>
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
              <Link
                exact
                activeClassName="active"
                className="nav-link"
                to="/productsList"
              >
                產品列表
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-link"
                to="/products"
              >
                產品
              </Link>
            </li>
            <li className="nav-item">
              <Link activeClassName="active" className="nav-link" to="/cart">
                購物車
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
        <Switch>
          <Route exact path='/'>
            <h1>
                首頁
            </h1>
          </Route>
          <Route  path='/productsList'>
            <h1>
                產品列表
            </h1>
          </Route>
          <Route path='/products'>
            <h1>
                產品
            </h1>
          </Route>
          <Route path='/cart'>
            <h1>
                購物車
            </h1>
          </Route>
        </Switch>
      </Router>

    </>
  )
}

export default Home
