import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './LandingPage.css'
import { GetRequestNPM } from './GetRequestNPM'

import PersonalTitleMessage from './PersonalTitleMessage'

class Landing extends Component {
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
        <GetRequestNPM />
      </div>
    )
  }
}

export default Landing
