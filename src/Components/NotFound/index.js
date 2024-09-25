import {Component} from 'react'

import Header from '../Header'

import './index.css'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="not-found">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
              alt="not found"
              className="img"
            />
          </div>
          <h1 className="head">Page Not Found</h1>
          <p className="para">
            we are sorry, the page you requested could not be found.
          </p>
        </div>
      </div>
    )
  }
}
