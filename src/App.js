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
import About from './components/about';
import Handloom from './components/handloom';
import Post from './components/post';
import Sweet from './components/sweet';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
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
        <Route path="/sweet" element={<Sweet />} />
        <Route path="/handloom" element={<Handloom />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}
export default App;
