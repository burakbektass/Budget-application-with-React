import {formatCurrency,calculateSpentByBudget,formatPercantage} from "../helper"

const BudgetItem = ({budget}) => {
    const {id,name,amount,color} = budget
    const spent = calculateSpentByBudget(id)
  return(
    <div className="budget" style={{
        "--accent":color
    }}>
        <div className="progress-text">
            <h3>{name}</h3>
            <p>{formatCurrency(amount)}</p>
        </div>
        <progress max={amount} value={spent}>
            {formatPercantage(spent/amount)}
        </progress>
        <div className="progress-text">
            <small>
                {formatCurrency(spent)} spent
            </small>
            <small>
                {formatCurrency(amount-spent)} remaining
            </small>
        </div>
    </div>
  )
};

export default BudgetItem;
