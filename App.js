import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AadharComp from './components/LoggedOut/AadharComp';
import OtpComp from './components/LoggedOut/OtpComp';
import UserName from './components/LoggedOut/UserName';
import UserInfoComp from './components/LoggedOut/UserDetailsComp';
import CrimeFeedComp from './components/loggedIn/CrimeFeedComp';
import ViewSingleCrimeComp from './components/loggedIn/ViewSingleCrimeComp';
import TipCrimeComp from './components/loggedIn/TipCrimeComp';
import UserProfileComp from './components/loggedIn/UserProfileComp';


export default function App() {
  const Stack = createNativeStackNavigator();
  const [authenticated, setAuthenticated] = useState(false)

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };



  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {authenticated ?
          <Stack.Screen name="LoginView" children={() => <LoggedInView handleLogout={handleLogout} />} /> :
          <Stack.Screen name="LogoutView" children={() => <LoggedOutView handleLogin={handleLogin} />} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoggedInView({handleLogout}) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='CrimeFeed'screenOptions={{ headerShown: false }} >
      <Stack.Screen name="CrimeFeed" component={CrimeFeedComp} />
      <Stack.Screen name="ViewSingleCrime" component={ViewSingleCrimeComp} />
      <Stack.Screen name="TipCrime" component={TipCrimeComp} />
      <Stack.Screen name="ProfilePage" children={() => {
        return <UserProfileComp handleLogout={handleLogout} />
      }} />
    </Stack.Navigator>
  )
}

function LoggedOutView({handleLogin}) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Aadharpage' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Aadharpage" component={AadharComp} />
      <Stack.Screen name="OtpPage" component={OtpComp} />
      <Stack.Screen name="UserDetails" component={UserInfoComp} />
      <Stack.Screen name="UserNamePage" children={() => {
        return <UserName handleLogin={handleLogin} />
      }} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
