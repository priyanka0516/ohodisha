import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Festival from './components/festival';
import Dance from './components/dance';
import Temple from './components/temple';
import Waterfall from './components/waterfall';
import Lakes from './components/lakes';
import Hiddengems from './components/hiddengems';
import Events from './components/events';
import Museums from './components/museums';
import Streetfood from './components/streetfood';
import About from './components/about';
import Handloom from './components/handloom';
import Post from './components/post';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/festival" element={<Festival/>}/>
        <Route path="/dance" element={<Dance />} />
        <Route path="/temple" element={<Temple />} />
        <Route path="/waterfall" element={<Waterfall />} />
        <Route path="/lakes" element={<Lakes />} />
        <Route path="/hiddengems" element={<Hiddengems />} />
        <Route path="/events" element={<Events />} />
        <Route path="/musuems" element={<Museums />} />
        <Route path="/streetfood" element={<Streetfood />} />
        <Route path="/handloom" element={<Handloom />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}
export default App;
