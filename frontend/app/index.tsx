import { AppRegistry } from 'react-native';
import appConfig from '../app.json';
import App from 'App';
const appName = appConfig.expo.name;
// Render the App component
export default function Index() {
  return <App />;
}

// Register the Index component as the entry point
AppRegistry.registerComponent(appName, () => Index);