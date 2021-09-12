/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// import navigators
import { AuthNavigator } from './src/action/AuthNavigator';

AppRegistry.registerComponent(appName, () => App);

// firebase auth
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/StackNavigator';

export default AppContainer = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return(
    <NavigationContainer>
      {user ? <AuthNavigator /> : <StackNavigator/> }
    </NavigationContainer>
  )
}