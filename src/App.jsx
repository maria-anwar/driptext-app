
import WebRoutes from './routes'
import { UserProvider } from './views/auth/AuthContext'

function App() {

  return (
    <UserProvider>
      <WebRoutes/>
    </UserProvider>
  )
}

export default App
