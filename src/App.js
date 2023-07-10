
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Contact from './Components/ContactUs/Contact';
import About from './Components/AboutUs/About';
import NotFound from './Components/NotFound/NotFound';
import Courses from './Components/Courses/Courses';
import Trainer from './Components/Trainer/Trainer';
function App() {
  return (
    <div className="App">
      <Router>
          <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/courses' element={<Courses/>}></Route>
          <Route path='/trainer' element={<Trainer/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
