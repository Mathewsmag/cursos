import React, { Component } from 'react'
import './App.css'
import Course from './components/Course.js'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      courses: [
        {
          id: 1,
          name: 'React',
          category: 'Javascript',
          image: 'https://image.pngaaa.com/930/2507930-middle.png'
        },
        {
          id: 2,
          name: 'Angular',
          category: 'Javascript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
        }
      ]
    }

    this.remove = this.remove.bind(this);
  }

  remove(courseId) {
    const { courses } = this.state,
      courseIndex = courses.findIndex(course => course.id == courseId);
    courses.splice(courseIndex, 1);
    this.setState({ courses });

  }


  render() {
    const { state } = this;
    return (
      <div className="App" >
        <ul className="courses-list">
          {
            state.courses.map(course => <Course course={course} onRemove={this.remove} />)
          }
        </ul>
      </div>
    )
  }
}