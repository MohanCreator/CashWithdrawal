// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachItem, onMinusAmount} = props
  const {value} = eachItem
  const onMinus = () => {
    onMinusAmount(value)
  }
  return (
    <li>
      <button className="button" onClick={onMinus} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
