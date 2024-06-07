import {
  formatCurrency,
  formatDateToLocal,
  getAllMatchingItems,
} from "../helper";
import { Link, useFetcher } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";

const ExpenseItem = ({ expense }) => {
  const fetcher = useFetcher();
  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocal(expense.createdAt)}</td>
      <td>
        <Link
          to={`/budget/${budget?.id}`}
          style={{
            "--accent": budget?.color,
          }}
        >
          {budget?.name}
        </Link>
      </td>
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense?.id} />
          <button
            type="submit"
            aria-label={`Delete ${expense?.name} expense`}
            className="btn btn--warning"
          >
            <TrashIcon width={20}></TrashIcon>
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};

export default ExpenseItem;
