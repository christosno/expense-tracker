import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

import { ExpenseContext } from "../store/expense-contex";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
    const { expenses } = useContext(ExpenseContext);

    const last7DaysExpenses = expenses.filter(expense => {
        const today = new Date();
        const dateMinus7Days = getDateMinusDays(today, 7);
        return (expense.date >= dateMinus7Days) && (expense.date <= today);
    })

    return (
        <ExpensesOutput expenses={last7DaysExpenses} periodName="Last 7 Days" fallbackText="No expenses registered for the last 7 days." />
    )
}

export default RecentExpenses;