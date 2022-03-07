import { Outlet } from 'react-router-dom';
import {Header} from './components'
import './styles/style.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
