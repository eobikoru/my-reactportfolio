import "./TopBar.css";
import { IoIosPerson } from "react-icons/io";
import { ImMail3 } from "react-icons/im";
function TopBar({menuopen,setmenuopen}) {
  return (
    <div className={"topbar " + (menuopen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <a href="#intro" className="logo">
              EMEKA..
            </a>
          </div>
          <div className="con">
            <IoIosPerson className="icon" />
            <span>0805656577</span>
          </div>
          <div className="con">
            <ImMail3 className="icon" />
            <span>emekadaniel916@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hambuger" onClick={() => setmenuopen(!menuopen)}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
