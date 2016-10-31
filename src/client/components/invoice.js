import React, { Component } from 'react'
import { FieldGroup } from './shared'
const { func, object } = React.PropTypes

export default class Invoice extends Component {
  render () {
    const invoice = this.props.invoices[this.props.params.invoiceId]
    return (
      <div>
        <h2>增值税表</h2>
        <hr />
        <form>
          <FieldGroup
            type='text'
            placeholder='公司名称'
            value={invoice.companyName} />
          <FieldGroup
            type='number'
            placeholder='纳税人识别号'
            value={invoice.taxPayerNumber} />
          <FieldGroup
            type='number'
            placeholder='电话'
            value={invoice.phone} />
          <FieldGroup
            type='text'
            placeholder='公司地址'
            value={invoice.address} />
          <FieldGroup
            type='text'
            placeholder='开户银行'
            value={invoice.bankName} />
          <FieldGroup
            type='number'
            placeholder='开户银行账号'
            value={invoice.bankAccount} />
        </form>
      </div>
    )
  }
}

Invoice.propTypes = {
  updateInvoice: func.isRequired,
  invoice: object.isRequired
}
