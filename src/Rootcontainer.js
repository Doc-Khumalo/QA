import React from 'react';
import Accordion from './Accordion';
import data from './faqs.json';

class Rootcontainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faq: []
        }
    }

    componentDidMount() {
        this.setState({
            faq: data.faqs
        })
    }

    render() {
        return (
            <div className="center-wrapper">

                {this.state.faq.map((data, i) => {
                    return (
                        <Accordion title={data.question} defaultState="open" key={i}>
                            <p>{data.answer}</p>
                        </Accordion>
                    )
                }
                )}
            </div>
        )
    }
}

export default Rootcontainer;