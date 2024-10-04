import './styles/main/main.scss'
import Main from './routes/Main';
import ShoppingStore from './routes/ShoppingStore';
import Admin from './routes/Admin';
import Restaurant from './routes/Restaurant';

function App() {

  return (
    <div>
      <Main />
      <ShoppingStore/>
      <Admin/>
      <Restaurant/>
    </div>
  )
}

export default App
