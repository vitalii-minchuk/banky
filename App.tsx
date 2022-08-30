// import { LogBox } from 'react-native';
import Navigation from './app/navigation/Navigation';
import { AuthProvider } from './app/providers/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

// LogBox.ignoreAllLogs();

