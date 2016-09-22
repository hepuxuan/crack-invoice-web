import React, { Component } from 'react'
import { FieldGroup } from './shared/index'
import { LOGIN_PATH } from './routes'
import { Link } from 'react-router'
const { func, bool, object } = React.PropTypes

export default class Invoice extends Component {
  constructor () {
    super()
    this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this)
    this.handleTaxPayerNumberChange = this.handleTaxPayerNumberChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleBankNameChange = this.handleBankNameChange.bind(this)
    this.handleBankAccountChange = this.handleBankAccountChange.bind(this)
  }

  handleCompanyNameChange (event) {
    this.props.updateInvoice({
      companyName: event.target.value
    })
  }

  handleTaxPayerNumberChange (event) {
    this.props.updateInvoice({
      taxPayerNumber: event.target.value
    })
  }

  handlePhoneChange (event) {
    this.props.updateInvoice({
      phone: event.target.value
    })
  }

  handleAddressChange (event) {
    this.props.updateInvoice({
      address: event.target.value
    })
  }

  handleBankNameChange (event) {
    this.props.updateInvoice({
      bankName: event.target.value
    })
  }

  handleBankAccountChange (event) {
    this.props.updateInvoice({
      bankAccount: event.target.value
    })
  }

  render () {
    return (
      <div>
        {!this.props.login ? (
           <div className='alert-warning alert'>
             <strong>警告!</strong> 您还未连接至手机客户端，请先
             <Link to={LOGIN_PATH}> 登录
             </Link>
           </div>
           ) : null}
        <h2>增值税表</h2>
        <hr/>
        <form>
          <FieldGroup
            type='text'
            placeholder='公司名称'
            value={this.props.invoice.companyName}
            onChange={this.handleCompanyNameChange} />
          <FieldGroup
            type='number'
            placeholder='纳税人识别号'
            value={this.props.invoice.taxPayerNumber}
            onChange={this.handleTaxPayerNumberChange} />
          <FieldGroup
            type='number'
            placeholder='电话'
            value={this.props.invoice.phone}
            onChange={this.handlePhoneChange} />
          <FieldGroup
            type='text'
            placeholder='公司地址'
            value={this.props.invoice.address}
            onChange={this.handleAddressChange} />
          <FieldGroup
            type='text'
            placeholder='开户银行'
            value={this.props.invoice.bankName}
            onChange={this.handleBankNameChange} />
          <FieldGroup
            type='number'
            placeholder='开户银行账号'
            value={this.props.invoice.bankAccount}
            onChange={this.handleBankAccountChange} />
        </form>
      </div>
    )
  }
}

Invoice.propTypes = {
  updateInvoice: func.isRequired,
  login: bool,
  invoice: object.isRequired
}
