import { useContext } from "react";
import { ExpenseContext } from "../store/expense-contex";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
    const { expenses } = useContext(ExpenseContext);
    return (
        <ExpensesOutput expenses={expenses} periodName="Total" fallbackText="No registered expenses found." />
    )
}

export default AllExpenses;