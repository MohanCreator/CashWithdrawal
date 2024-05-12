// CashWithdrawal.js
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onMinusAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app-container">
        <div className="main-container">
          <div className="name-container">
            <p className="initial">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balanceContainer">
            <p className="yourBalance">Your Balance</p>
            <div className="balance">
              <p className="amount">{amount}</p>
              <p className="inAm">In Rupees</p>
            </div>
          </div>
          <div className="withdrawContainer">
            <p className="with">Withdraw</p>
            <p className="choose">CHOOSE SUM (IN RUPEES)</p>
            <div className="amounts">
              <ul className="listContainer">
                {denominationsList.map(eachOther => (
                  <DenominationItem
                    key={eachOther.id}
                    onMinusAmount={this.onMinusAmount}
                    eachItem={eachOther}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
