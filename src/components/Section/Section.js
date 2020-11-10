import React, {Component} from 'react';
import './Section.css';

// container for string values to cycle through upon scrolling
const coreValuesText = ["Focus on Impact", "Be open", "Be bold", "Build social value"];

export default class Section extends Component {
    render() {
        // index value used to target each element in coreValuesText container array
        let {index} = this.props;

        return (
            <div className="blue-section">
                <span className="blue-section-subtext">changing text</span>
                <span className="blue-section-titletext">{coreValuesText[index]}</span>
            </div>
        )
    }
}