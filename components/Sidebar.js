import React,{useState} from "react";
import '../style/style.css'

const SideBar = () =>{
    const [isOpen,setIsOpen]=useState(false)

    const toggleSideBar= () => {
        setIsOpen(!isOpen);
    }

return(
    <div>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="hamburger" onClick={toggleSideBar}>
            &#9776;
        </div>
    </div>
)
}

export default SideBar;