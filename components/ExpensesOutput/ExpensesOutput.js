import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "New Desk",
        amount: 200.00,
        date: new Date(2024, 2, 1),
    },
    {
        id: "e2",
        description: "Groceries",
        amount: 100.00,
        date: new Date(2023, 7, 15),
    },
    {
        id: "e3",
        description: "New TV",
        amount: 400.00,
        date: new Date(2024, 2, 2),
    },
    {
        id: "e4",
        description: "Car Insurance",
        amount: 200.00,
        date: new Date(2023, 12, 29),
    },
    {
        id: "e5",
        description: "Book",
        amount: 44.56,
        date: new Date(2024, 2, 4),
    },

]

function ExpensesOutput({ expenses, periodName }) {
    return (
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}


export default ExpensesOutput;