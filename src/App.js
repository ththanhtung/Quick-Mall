import { Outlet } from 'react-router-dom';
import {Header} from './Components'
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
