import React from "react";
import "./footer.css";
function Footer(){
    return(

<section className="footer">

    <div className="box-container">

        <div className="box">
            <div className="A">
        <span className="logo"><span className="logo">S</span>hicasa</span>
            <p>You have questions regarding our services?Contact us,we will be happy to help you out!</p>
           <a href="#"><span>shicasa@gmail.com</span></a>
            <a href="#"><span>Gomti Nagar Ext Bypass Road,Vipin Khand,Gomti Nagar,Lucknow, Uttar Pradesh 226010</span></a>
            <a href="#"><span>+91 999-777-6548</span></a>
        </div>
        </div>
        <div className="box">
            <div className="B">
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">Rooms</a>
            <a href="#">Services</a>
            <a href="#">Gallery</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
        </div>
        <div className="box">
        <div className="C">
            <h3>Follow Us</h3>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Linkedin</a>
        </div>
        </div>
        <div className="box">
        <div className="D">
            <h3>Gallery</h3>
            <div className="image">
            <div className="one">
          <img src="https://bsquaresoft.com/themedemo/royalluxurystay/images/footer-gallery-1.jpg" alt=""></img>
          <img src="https://bsquaresoft.com/themedemo/royalluxurystay/images/footer-gallery-2.jpg" alt=""></img>
          <img src="https://bsquaresoft.com/themedemo/royalluxurystay/images/footer-gallery-3.jpg" alt=""></img>
          </div>
          </div>
          <div className="two">
          <img src="https://bsquaresoft.com/themedemo/royalluxurystay/images/footer-gallery-4.jpg" alt=""></img>
          <img src="https://bsquaresoft.com/themedemo/royalluxurystay/images/footer-gallery-5.jpg" alt=""></img>
          <img src="https://bsquaresoft.com/themedemo/royalluxurystay/images/footer-gallery-6.jpg" alt=""></img>
          </div>
          </div>
        </div>
    </div>

    <h1 className="credit">Copyrights © 2021 Shicasa</h1>

</section>
   )
}
export default Footer;