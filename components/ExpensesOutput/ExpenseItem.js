import { Pressable, View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/style";
import { getFormatedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ description, date, amount, id }) {

    const navigation = useNavigation();

    function expensePressHandler() {
        console.log("Expense Pressed");
        navigation.navigate("ManageExpense", { expenseId: id });
    }

    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => pressed ? styles.pressed : null}
        >
            <View style={styles.item}>
                <View>
                    <Text style={[styles.textBase, styles.descriptionText]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountText}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpenseItem;

const styles = StyleSheet.create({
    item: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 6,
        elevation: 4,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    descriptionText: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold",
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        minWidth: 80,
    },
    amountText: {
        color: GlobalStyles.colors.primary500,
        fontWeight: "bold",
    },
    pressed: {
        opacity: 0.6,
    }
})