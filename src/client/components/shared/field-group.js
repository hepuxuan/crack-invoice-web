import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Col, Button} from 'react-bootstrap';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class FieldGroup extends Component {

    handleCopy(event) {
        event.preventDefault();

    }

    render() {
        return (
            <FormGroup controlId={this.props.id}>
                <Col sm={2}>
                    <ControlLabel>{this.props.label}</ControlLabel>
                </Col>
                <Col sm={8}>
                    <FormControl {...this.props} ref="myInput"/>
                </Col>
                <Col sm={2}>
                    <CopyToClipboard text={this.props.value}>
                        <Button bsStyle="primary" type="button">复制</Button>
                    </CopyToClipboard>
                </Col>
            </FormGroup>
        );
    }
}

FieldGroup.defaultProps = {
    value: ''
};
