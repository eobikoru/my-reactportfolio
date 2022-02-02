import { useState } from 'react';
import "./Portfolio.css";
import Zoom from "react-reveal/Zoom";
import PortfolioList from "../../PortfolioList/PortfolioList";
function Portfolio() {
const [selected , setSelected] = useState('featured')
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "web App",
    },
    {
      id: "ui ux",
      title: "ui ux",
    },
    {
      id: "content",
      title: "content",
    },
  
  ];


  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul className="portfolioul">
        {list.map((item) => (
          <PortfolioList title={item.title} active={selected == item.id} setSelected={setSelected} id={ item.id}/>
         ))}
      </ul>
      <Zoom bottom>
        <div className="portfoliocontainer">
          <div className="items">
            <img className="pimg" src="assets/emeka1.jpg" alt="" />
            <h3>banking App</h3>
          </div>
          <div className="items">
            <img className="pimg" src="assets/emeka1.jpg" alt="" />
            <h3 >banking App</h3>
          </div>
          <div className="items">
            <img className="pimg" src="assets/emeka1.jpg" alt="" />
            <h3>banking App</h3>
          </div>
          <div className="items">
            <img className="pimg" src="assets/emeka1.jpg" alt="" />
            <h3>banking App</h3>
          </div>
          <div className="items">
            <img className="pimg" src="assets/emeka1.jpg" alt="" />
            <h3>banking App</h3>
          </div>
          <div className="items">
            <img className="pimg" src="assets/emeka1.jpg" alt="" />
            <h3>banking App</h3>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Portfolio;
