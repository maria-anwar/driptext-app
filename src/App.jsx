
import WebRoutes from './routes'
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from "@chakra-ui/react";
function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null}  persistor={persistor}>
      <ChakraProvider>
          <WebRoutes />
          </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
