import { useLayoutEffect, useContext } from "react";
import { ExpenseContext } from "../store/expense-contex";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";

import { GlobalStyles } from "../constants/style";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

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

    function confirmHandler(expenseData) {
        console.log("Confirm");
        if (expenseId) {
            updateExpense(expenseId, expenseData);
        } else {
            addExpense(expenseData);
        }
        navigation.goBack();
    }

    return (
        <View style={styles.constainer}>
            <ExpenseForm
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                expenseId={expenseId}
            />
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
    deleteContainer: {
        marginTop: 24,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center",
    }
})