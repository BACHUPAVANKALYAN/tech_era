import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

export default class Course extends Component {
  render() {
    const {details} = this.props
    const {logoUrl, name, id} = details
    return (
      <Link to={`courses/${id}`}>
        <li className="course-list">
          <div>
            <img src={logoUrl} alt={name} />
          </div>
          <p className="para">{name}</p>
        </li>
      </Link>
    )
  }
}
