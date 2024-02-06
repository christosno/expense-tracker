import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import ExpensesContexProvider from './store/expense-contex';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import IconButton from './components/UI/IconButton';

import { GlobalStyles } from './constants/style';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <Tab.Navigator screenOptions={({ navigation }) => ({
      headerStyle: {
        backgroundColor: GlobalStyles.colors.primary500,
      },
      headerTintColor: 'white',
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary500,
      },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({ tintColor }) => <IconButton icon="add" size={24} color={tintColor} onPress={() => { navigation.navigate("ManageExpense") }} />
    })}>
      <Tab.Screen name="RecentExpenses" component={RecentExpenses} options={{
        title: 'Recent Expenses',
        tabBarLabel: "Recent",
        tabBarIcon: ({ color, size }) => <Ionicons name="hourglass-outline" size={size} color={color} />
      }} />
      <Tab.Screen name="AllExpenses" component={AllExpenses} options={{
        title: 'All Expenses',
        tabBarLabel: "All",
        tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />
      }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContexProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
            headerTintColor: 'white',
          }}>
            <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} options={{
              headerShown: false
            }} />
            <Stack.Screen name="ManageExpense" component={ManageExpense} options={{
              presentation: "modal",
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContexProvider>
    </>
  );
}

