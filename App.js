import Login from './Screens/loginpage';
import Tabs from './Screens/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer options={{headerShown:false}}>
    <Stack.Navigator options={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} independent={true} options={{headerShown:false}}/>
      <Stack.Screen name="Tabs" component={Tabs} independent={true} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}