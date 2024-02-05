import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

import { GlobalStyles } from "../../constants/style";

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
    {
        id: "e6",
        description: "New Desk",
        amount: 200.123,
        date: new Date(2023, 2, 1),
    },
    {
        id: "e7",
        description: "New Laptop",
        amount: 1500.00,
        date: new Date(2023, 3, 15),
    },
    {
        id: "e8",
        description: "Smart Phone",
        amount: 945.70,
        date: new Date(2024, 2, 2),
    },
    {
        id: "e9",
        description: "Moto Insurance",
        amount: 100.00,
        date: new Date(2023, 12, 29),
    },
    {
        id: "e10",
        description: "React Native Book",
        amount: 49.56,
        date: new Date(2024, 2, 5),
    },

]

function ExpensesOutput({ expenses, periodName }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}


export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    }
})