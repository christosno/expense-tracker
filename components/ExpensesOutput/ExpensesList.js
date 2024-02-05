import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ExpenseItem from "./ExpenseItem";

function renderExpeseItem(item) {
    return (
        <ExpenseItem
            description={item.description}
            date={item.date}
            amount={item.amount}
        />
    )
}

function ExpensesList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            renderItem={(itemData) => renderExpeseItem(itemData.item)}
            keyExtractor={item => item.id}
        />
    )
}


export default ExpensesList;