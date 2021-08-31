import React,{useState} from 'react';
import './header.css';
import Model from './model';

function Header() {
    const [modalOpen,setModalOpen] =useState(false);
  
    return(
<section className="header">
    <nav>
         <div className="bar" id="menu-bar" class="fas fa-bars"></div>
        <a href="" className="logo"><span>S</span>hicasa</a>
        <div className="nav-links">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="rooms">Rooms</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Gallery</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        <div id='menu-bar' class="fas fa-close"></div>
           
        </div>
    </nav>
    <div className="text-box">
        <h1>Welcome To Shicasa</h1>
        <p>Your Unforgotable Getaway.
        </p>
        <button  href="" className="openModalbtn" onClick={()=>{
            setModalOpen(true);
        }}>BOOK NOW</button>
        {modalOpen && <Model setOpenModal={setModalOpen}/>}
       
    </div>
        
        
</section>

)
}
export default Header;