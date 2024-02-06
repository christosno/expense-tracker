import { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { ExpenseContext } from "../../store/expense-contex";
import Input from "./Input";
import Button from "../UI/Button";

function ExpenseForm({ onCancel, onSubmit, expenseId }) {

    const { expenses } = useContext(ExpenseContext);
    const expense = expenses.find((expense) => expense.id === expenseId)

    const intialExpense = {
        amount: expense?.amount.toString() || "",
        date: expense?.date.toISOString().slice(0, 10) || "",
        description: expense?.description || "",
    }

    const [inputValue, setInputValue] = useState(intialExpense);

    console.log(inputValue);

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValue((prevValue) => ({
            ...prevValue,
            [inputIdentifier]: enteredValue,
        }))
    }

    function submitHnadler() {
        const expenseData = {
            amount: +inputValue.amount,
            date: new Date(inputValue.date),
            description: inputValue.description,
        }
        onSubmit(expenseData);
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}
                    label="Amount"
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: (amountValue) => inputChangeHandler("amount", amountValue),
                        value: inputValue.amount,
                    }} />
                <Input
                    style={styles.rowInput}
                    label="Date"
                    textInputConfig={{
                        placeholder: "yyyy-mm-dd",
                        maxlenght: 10,
                        onChangeText: (dateValue) => inputChangeHandler("date", dateValue),
                        value: inputValue.date,
                    }}
                />
            </View>
            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    onChangeText: (descriptionValue) => inputChangeHandler("description", descriptionValue),
                    value: inputValue.description,
                }}
            />
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHnadler}>{expenseId ? "Update" : "Add"}</Button>
            </View>
        </View>
    )
}


export default ExpenseForm;

export const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
        marginVertical: 24,
        textAlign: "center",
    },
    inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowInput: {
        flex: 1,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
})

