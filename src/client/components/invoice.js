import React, { Component } from 'react';
import { FieldGroup } from './shared/index'
import { Form, Jumbotron } from 'react-bootstrap';
import CINavBar from './nav-bar';
import LoginModal from './login';

export default class Invoice extends Component {
    constructor() {
        super();
        this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
        this.handleTaxPayerNumberChange = this.handleTaxPayerNumberChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleBankNameChange = this.handleBankNameChange.bind(this);
        this.handleBankAccountChange = this.handleBankAccountChange.bind(this);
    }

    componentDidMount() {
        this.props.initWebSocket();
    }

    handleCompanyNameChange(event) {
        this.props.updateInvoice({
            companyName: event.target.value
        });
    }

    handleTaxPayerNumberChange(event) {
        this.props.updateInvoice({
            taxPayerNumber: event.target.value
        });
    }

    handlePhoneChange(event) {
        this.props.updateInvoice({
            phone: event.target.value
        });
    }

    handleAddressChange(event) {
        this.props.updateInvoice({
            address: event.target.value
        });
    }

    handleBankNameChange(event) {
        this.props.updateInvoice({
            bankName: event.target.value
        });
    }

    handleBankAccountChange(event) {
        this.props.updateInvoice({
            bankAccount: event.target.value
        });
    }

    getQRCodeValue() {
        return JSON.stringify({
            clientId: this.props.clientId
        });
    }

    render() {
        return (
            <div>
                <CINavBar/>
                <LoginModal show={!this.props.login} value={this.getQRCodeValue()}/>
                <Jumbotron className="invoice">
                    <h1>增值税表</h1>
                    <Form horizontal>
                        <FieldGroup
                            id="company-name"
                            type="text"
                            label="公司名称:"
                            placeholder="公司名称"
                            value={this.props.invoice.companyName}
                            onChange={this.handleCompanyNameChange}
                        />
                        <FieldGroup
                            id="tax-payer-number"
                            type="number"
                            label="纳税人识别号:"
                            placeholder="纳税人识别号"
                            value={this.props.invoice.taxPayerNumber}
                            onChange={this.handleTaxPayerNumberChange}
                        />
                        <FieldGroup
                            id="phone"
                            type="number"
                            label="电话:"
                            placeholder="电话"
                            value={this.props.invoice.phone}
                            onChange={this.handlePhoneChange}
                        />
                        <FieldGroup
                            id="address"
                            type="text"
                            label="公司地址:"
                            placeholder="公司地址"
                            value={this.props.invoice.address}
                            onChange={this.handleAddressChange}
                        />
                        <FieldGroup
                            id="bank-name"
                            type="text"
                            label="开户银行:"
                            placeholder="开户银行"
                            value={this.props.invoice.bankName}
                            onChange={this.handleBankNameChange}
                        />
                        <FieldGroup
                            id="bank-account"
                            type="number"
                            label="开户银行账号:"
                            placeholder="开户银行账号"
                            value={this.props.invoice.bankAccount}
                            onChange={this.handleBankAccountChange}
                        />
                    </Form>
                </Jumbotron>
            </div>
        );
    }
}
