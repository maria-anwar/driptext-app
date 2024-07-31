
import WebRoutes from './routes'
import  { useEffect } from 'react';
import { UserProvider } from './views/auth/AuthContext'
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  useEffect(() => {
    if (window.Chargebee) {
      window.Chargebee.init({
        site: "malhoc-test",
        publishableKey: "test_fUXFkaruKdcuLDW8uIJrJ0Rq56tVAxr1r"
      });
    } else {
      console.error('Chargebee script not loaded');
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserProvider>
          <WebRoutes />
        </UserProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
