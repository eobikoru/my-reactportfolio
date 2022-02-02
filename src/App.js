import './App.css'
import Contact from './Components/contact/Contact';
import Intro from './Components/intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/testimonials/Testimonials';
import TopBar from './Components/topbar/TopBar';
import Works from './Components/works/Works';
import {useState} from 'react'
import Menu from './Components/Menu/Menu';

function App() {



  const  [menuopen, setmenuopen] = useState(false)
  return (
    <div className="app">
      <TopBar menuopen={menuopen} setmenuopen={setmenuopen} />
      <Menu menuopen={menuopen} setmenuopen={setmenuopen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
