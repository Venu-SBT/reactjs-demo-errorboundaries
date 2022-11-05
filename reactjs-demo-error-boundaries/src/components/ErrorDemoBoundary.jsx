import React, { Component } from 'react';

class ErrorDemoBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false , message: ""};   // initialize
  }
  
  static getDerivedStateFromError(error) {     // invoked before render() i.e. in render phase
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error.message };   // updates state + triggers re-rendering
  }

  componentDidCatch(error, errorComponentStackInfo) {   // invoked after render method i.e. in commit phase
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logComponentStackToMyService(errorComponentStackInfo.componentStack);
  }

  render() {
    // fallback ui
    if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div>
                <h1>Something went wrong!</h1>
                <h1>{this.state.message}</h1>
            </div>
        );
    }

    return (
      <>
        {this.props.children}
      </>
    )
  }
}

export default ErrorDemoBoundary;
