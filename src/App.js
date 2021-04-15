import './App.css';
import { useRoutes } from 'hookrouter';
import Home from './components/Home.js'
import {Piano} from './components/piano.js'
import Header from './components/Header.js'

const routes = {
  '/home': () => <Home />,
  '/play': () => <Piano />,
}

function App() {
  const match = useRoutes(routes)
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {match}
      </header>
    </div>
  )
}

export default App;
