import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AddBooks from './container/AddBooks';
import SearchBooks from './container/searchBooks';
import Footer from './components/Footer';

function App() {


  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={ <AddBooks /> }/>
          <Route path="/search" element={ <SearchBooks /> }/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
