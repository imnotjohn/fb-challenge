import React, {Component} from 'react';
import './App.css';
import Section from './components/Section/Section';
import logotype from './images/fb-logo-type.png';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollTop: 0,
      index: 0
    }
  }

  // function to handle Scroll events
  handleScroll = (event) => {
    // set scrollTop state
    this.setState({scrollTop: event.target.scrollingElement.scrollTop});

    // determine indexed value based on current position
    // need to subtract 1 to take into account that arrays are zero-indexed
    const index = Math.floor(this.state.scrollTop / window.innerHeight) - 1;

    // check to ensure appropriate index values
    if (index < 0) {
      this.setState({
        index: 0
      })
    } else if (index > 4) {
      this.setState({
        index: 4
      });
    } else {
      this.setState({
        index: index
      });
    }
  }

  componentDidMount() {
    // set up eventListener as user scrolls the page
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
        <>
        <div className="slider-container">
        <div id="header-bar">
          <img src={logotype} alt="Facebook Text Logo"></img>
        </div>
        <div className="grey-section" />
        <Section  index={this.state.index} />
        </div>
        <div className="grey-section" />
        </>
    )
  }
}

export default App;