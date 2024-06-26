import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import ExpensesPage, {
  expensesLoader,
  expensesAction,
} from "./pages/ExpensesPage";
import BudgetPage, { budgetLoader, budgetAction } from "./pages/BudgetPage";

import Error from "./pages/Error";
import Main, { mainLoader } from "./layouts/main";
import { logoutAction } from "./actions/logout";
import { deleteBudget } from "./actions/deleteBudget";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: mainLoader,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Dashboard />,
          loader: dashboardLoader,
          action: dashboardAction,
          errorElement: <Error />,
        },
        {
          path: "budget/:id",
          element: <BudgetPage />,
          loader: budgetLoader,
          action: budgetAction,
          errorElement: <Error />,
          children:[
            {
              path:"delete",
              action:deleteBudget,
            }
          ]
        },
        {
          path: "expenses",
          element: <ExpensesPage />,
          loader: expensesLoader,
          action: expensesAction,
        },
        {
          path: "logout",
          action: logoutAction,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
