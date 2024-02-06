import { createContext, useReducer } from "react";

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

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({ descripption, amount, date }) => { },
    updateExpense: (id, { descripption, amount, date }) => { },
    deleteExpense: (id) => { },
})


function expenseReducer(state, action) {

    switch (action.type) {
        case "ADD":
            const id = new Date().toString() + Math.random().toString()
            return [{ ...action.paylaod, id }, ...state]
        case "UPDATE":
            return state.map(expense => expense.id === action.paylaod.id ? { ...action.paylaod.expenseData, id: expense.id } : expense)
        case "DELETE":
            return state.filter(expense => expense.id !== action.paylaod)
        default:
            return state;
    }
}


function ExpensesContexProvider({ children }) {

    const [expenses, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES)

    function addExpense(expenseData) {
        dispatch({ type: "ADD", paylaod: expenseData })
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: "UPDATE", paylaod: { id, expenseData } })
    }

    function deleteExpense(id) {
        dispatch({ type: "DELETE", paylaod: id })
    }

    const value = {
        expenses,
        addExpense,
        updateExpense,
        deleteExpense,
    }

    return (
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpensesContexProvider;