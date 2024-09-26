import './styles/main/main.scss'
import Main from './routes/Main';
import ShoppingStore from './routes/ShoppingStore';
import Admin from './routes/Admin';

function App() {

  return (
    <div>
      <Main />
      <ShoppingStore/>
      <Admin/>
    </div>
  )
}

export default App
