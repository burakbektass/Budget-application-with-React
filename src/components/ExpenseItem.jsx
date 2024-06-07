import {formatCurrency,formatDateToLocal} from "../helper"

const ExpenseItem = ({expense}) => {
    return (
        <>
            <td>{expense.name}</td>
            <td>{formatCurrency(expense.amount)}</td>
            <td>{formatDateToLocal(expense.createdAt)}</td>
        </>
    )
};

export default ExpenseItem;
