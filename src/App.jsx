
import WebRoutes from './routes'
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null}  persistor={persistor}>
          <WebRoutes />
      </PersistGate>
    </Provider>
  )
}

export default App
