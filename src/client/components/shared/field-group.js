import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class FieldGroup extends Component {

    handleCopy(event) {
        event.preventDefault();
    }

    render() {
        const props = {...this.props};
        delete props.class;
        return (
            <div className="input-group">
                <input {...this.props} className={`input-group-field ${this.props.class}`}/>
                <div className="input-group-button">
                    <CopyToClipboard text={this.props.value}>
                        <button className="hollow button" href="#" onClick={this.handleCopy}>复制</button>
                    </CopyToClipboard>
                </div>
            </div>
        );
    }
}

FieldGroup.defaultProps = {
    value: ''
};

FieldGroup.propTypes = {
    value: React.PropTypes.string,
    class: React.PropTypes.string
};
