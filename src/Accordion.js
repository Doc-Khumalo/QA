import React, { Component } from 'react';
import './App.css';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {

    if (this.props.defaultState === "open")
      return { accordionActiveClass: "open", accordionActiveStatus: true }
    else
      return { accordionActiveClass: "", accordionActiveStatus: false }

  }

  activeAccordionEvent() {
    if (this.state.accordionActiveStatus) {
      this.setState({ accordionActiveClass: "", accordionActiveStatus: false });
    } else {
      this.setState({ accordionActiveClass: "open", accordionActiveStatus: true });
    }
  }

  render() {
    return (
      <div className="App">
        <div className={"section " + this.state.accordionActiveClass} onClick={e => this.activeAccordionEvent(e)}>
          <p className="title">{this.props.title}</p>
        </div>
        <div className={"content " + this.state.accordionActiveClass}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Accordion;
