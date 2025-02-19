import Home from './components/Home/Home'
import News from './components/News/News'
import Contact from './components/Contact/Contact'
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/news' element={ <News/>} />
        <Route path='/contact' element={ <Contact/>} />

      </Routes>
    </div>
  );
}

export default App;
