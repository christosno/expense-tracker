import { useState, useContext } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import { ExpenseContext } from "../../store/expense-contex";
import Input from "./Input";
import Button from "../UI/Button";

import { GlobalStyles } from "../../constants/style";

function ExpenseForm({ onCancel, onSubmit, expenseId }) {

    const { expenses } = useContext(ExpenseContext);
    const expense = expenses.find((expense) => expense.id === expenseId)

    const intialExpense = {
        amount: {
            value: expense?.amount.toString() || "",
            isValid: true
        },
        date: {
            value: expense?.date.toISOString().slice(0, 10) || "",
            isValid: true
        },
        description: {
            value: expense?.description || "",
            isValid: true
        },
    }

    const [input, setInput] = useState(intialExpense);

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInput((prevValue) => ({
            ...prevValue,
            [inputIdentifier]: { value: enteredValue, isValid: true },
        }))
    }

    function submitHnadler() {
        const expenseData = {
            amount: +input.amount.value,
            date: new Date(input.date.value),
            description: input.description.value,
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== "Invalid Date";
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // Alert.alert("Invalid Input", "Please enter a valid amount, date and description")
            setInput((prevValue) => ({
                amount: {
                    value: prevValue.amount.value,
                    isValid: amountIsValid,
                },
                date: {
                    value: prevValue.date.value,
                    isValid: dateIsValid,
                },
                description: {
                    value: prevValue.description.value,
                    isValid: descriptionIsValid,
                },
            }
            ))

            return
        }

        onSubmit(expenseData);
    }

    const formIsInvalid = !input.amount.isValid || !input.date.isValid || !input.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}
                    label="Amount"
                    invalid={!input.amount.isValid}
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: (amountValue) => inputChangeHandler("amount", amountValue),
                        value: input.amount.value,
                    }} />
                <Input
                    style={styles.rowInput}
                    label="Date"
                    invalid={!input.date.isValid}
                    textInputConfig={{
                        placeholder: "yyyy-mm-dd",
                        maxlenght: 10,
                        onChangeText: (dateValue) => inputChangeHandler("date", dateValue),
                        value: input.date.value,
                    }}
                />
            </View>
            <Input
                label="Description"
                invalid={!input.description.isValid}
                textInputConfig={{
                    multiline: true,
                    onChangeText: (descriptionValue) => inputChangeHandler("description", descriptionValue),
                    value: input.description.value,
                }}
            />
            {formIsInvalid ? <Text style={styles.errorText}>Invalid input values, Please check the entered data.</Text> : null}
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
    errorText: {
        textAlign: "center",
        color: GlobalStyles.colors.error500,
        margin: 8
    }
})

