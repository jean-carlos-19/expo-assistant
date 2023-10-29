import { HomeScreen, WelcomeScreen } from "@/screens";
import { RootStackParamList } from "@/types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName="Welcome">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}