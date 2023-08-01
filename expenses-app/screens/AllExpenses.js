import { useContext } from "react";

import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export default function AllExpenses() {
  const ctx = useContext(ExpensesContext);
  return <ExpensesOutput expenses={ctx.expenses} expensesPeriod="Total" fallbackText="No registered expenses found." />
}