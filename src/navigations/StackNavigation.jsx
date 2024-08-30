import { createStackNavigator } from "@react-navigation/stack";
import Loginpage from "../views/Loginpage";
import Users from "../views/Users";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loginpage">
        <Stack.Screen name="Loginpage" component={Loginpage} />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
