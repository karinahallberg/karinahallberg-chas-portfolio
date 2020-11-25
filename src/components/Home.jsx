import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Home.css'
import { GetRequestNPM } from './GetRequestNPM'

import PersonalTitleMessage from './PersonalTitleMessage'
import ErrorBoundary from '../ErrorBoundary'

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <PersonalTitleMessage />
        <div className='home'>
          <Carousel controls={false} indicators interval={2500} pause={false}>
            <Carousel.Item>
              <img
                className='d-block w-100 custom-img'
                src='https://picsum.photos/id/0/5616/3744?grayscale'
                alt='First slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100 custom-img'
                src='https://picsum.photos/id/180/2400/1600?grayscale'
                alt='Second slide'
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <ErrorBoundary>
          <GetRequestNPM />
        </ErrorBoundary>
      </div>
    )
  }
}

export default Home
