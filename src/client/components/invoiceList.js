import React from 'react'
import * as _ from 'lodash'
import { Link } from 'react-router'
import moment from 'moment'

const InvoiceList = props => (
  <div>
    <h2>增值税表</h2>
    <hr />
    <table>
      <thead>
        <tr>
          <th>时间</th>
          <th>公司名称</th>
          <th>微信号</th>
        </tr>
      </thead>
      <tbody>
        {_.map(props.invoices, (invoice, timestamp) => {
          return (
            <tr>
              <td><Link to={`/invoices/${timestamp}`}>{moment(parseInt(timestamp)).format('MMMM Do, h:mm:ss a')}</Link></td>
              <td>{invoice.companyName}</td>
              <td>xxx</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
)

export default InvoiceList
