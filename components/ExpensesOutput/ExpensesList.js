import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

function renderExpeseItem(item) {
    return (
        <Text>{item.description}</Text>
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