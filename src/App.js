import React, { Component } from 'react'
import './App.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/Main'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    const { isLightTheme, light, dark } = this.context
    const theme = isLightTheme ? light : dark
    return (
      <Router>
        <div className='demo-big-content'>
          <Layout>
            <Header title='Karina Hallberg' scroll>
              <Navigation>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/articles'>Articles</Link>
              </Navigation>
            </Header>
            <Drawer title='Karina Hallberg'>
              <Navigation>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/articles'>Articles</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className='page-content' />
              <Main />
            </Content>
          </Layout>
        </div>
      </Router>
    )
  }
}

export default App
