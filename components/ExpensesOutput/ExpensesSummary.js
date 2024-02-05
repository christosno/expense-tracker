import { Text, View, StyleSheet } from 'react-native';

function ExpensesSummary({ periodName, expenses }) {

    const totalExpenses = expenses.reduce((acc, expense) => {
        return acc + expense.amount;
    }, 0);

    return (
        <View>
            <Text>{periodName}</Text>
            <Text>${totalExpenses.toFixed(2)}</Text>
        </View>
    );
}

export default ExpensesSummary;

const styles = StyleSheet.create({

})