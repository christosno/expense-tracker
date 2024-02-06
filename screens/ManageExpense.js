import { useLayoutEffect, useContext } from "react";
import { ExpenseContext } from "../store/expense-contex";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";

import { GlobalStyles } from "../constants/style";

function ManageExpense({ route, navigation }) {
    const expenseId = route.params?.expenseId

    const { deleteExpense, updateExpense, addExpense } = useContext(ExpenseContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: expenseId ? "Edit Expense" : "Add Expense"
        })
    }, [navigation, expenseId])

    function deleteExpenseHandler() {
        console.log("Delete Expense");
        deleteExpense(expenseId)
        navigation.goBack();
    }

    function cancelHandler() {
        console.log("Cancel");
        navigation.goBack();
    }

    function confirmHandler() {
        console.log("Confirm");
        if (expenseId) {
            updateExpense(expenseId, {
                description: "Update Test",
                amount: 11.00,
                date: new Date(2024, 1, 6)
            });
        } else {
            addExpense(
                {
                    description: "Test",
                    amount: 10.00,
                    date: new Date(2024, 1, 6),
                }
            );
        }
        navigation.goBack();
    }

    return (
        <View style={styles.constainer}>
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{expenseId ? "Update" : "Add"}</Button>
            </View>
            {expenseId ? (
                <View style={styles.deleteContainer}>
                    <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
                </View>
            ) : null}
        </View>
    )
}

export default ManageExpense;

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
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
    deleteContainer: {
        marginTop: 24,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center",
    }
})