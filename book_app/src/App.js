import { Route,} from 'react-router-dom';
import './App.css';
import Apipost from './components/Apipost';
//import Apifetch from './components/Apifetch';
//import Navigationabar from './components/Navigationabar';
//import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <Apipost></Apipost>
      
        <Route path='/'></Route>
    </div>
  )
}

export default App;
