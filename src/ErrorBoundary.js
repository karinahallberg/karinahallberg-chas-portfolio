import React, { Component, useState } from 'react'
import './App.css'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      info: null,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
    this.setState({ error: true })
  }

  render() {
    if (this.state.error) {
      return <AlertDismissibleExample />
    }
    return this.props.children
  }
}

function AlertDismissibleExample() {
  const [show, setShow] = useState(true)

  if (show) {
    return (
      <Alert variant='danger' onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! Random Error just to annoy you!</Alert.Heading>
        <p>
          Like my husband says "It's the new generation developers fault...they
          just don't care about making things work properly!"
        </p>
      </Alert>
    )
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>
}

export default ErrorBoundary
