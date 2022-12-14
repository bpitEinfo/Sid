 import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import {firebase} from './config' ;
import Profile from './src/Profile';
import Qrcode from './src/Qrcode';

const Stack = createNativeStackNavigator();
function App() {

  /*const [initializing,setInitializing] = useState(true);
  const [user,setUser] =useState();
  //Handle user State changes
  function onAuthStatechange(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }
  useEffect(() =>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStatechange);
    return subscriber;
  },[]);
  if(initializing) return null;
  if(!user)*/
  {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Qrcode" component={Qrcode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 
  }
}



export default App;
