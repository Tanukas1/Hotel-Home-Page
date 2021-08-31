import React from 'react';
import './content.css';
function Content(){
    return(
        <section className="packages" id="packages">

    <div className="heading">
    <h2 className="head">Featured Rooms</h2>
         <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
    </div>

    <div className="box-container">

        <div className="box">
            <img src="standard.jpg" alt=""/>
         <div className="contentone">
           <span><p>Standard Room</p></span>
            <div className="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div className="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <span>173 reviews</span>
                </div>
                <div className="price"> $90.00 <span>$120.00</span> </div>
                <a href="#" className="book-btn">BOOK NOW</a>
            </div>
         </div>
        </div>
        <div className="box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-O5Mut-WJCUtGD5eBtgu5h_Fi7XliznpXw&usqp=CAU" alt=""/>
         <div className="contentone">
         <span><p>Luxury Room</p></span>
            <div className="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div className="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <span>36 reviews</span>
                </div>
                <div className="price"> $110.00 <span>$150.00</span> </div>
                <a href="#" className="book-btn">BOOK NOW</a>
            </div>
         </div>
        </div>
        <div className="box">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/43/1b/c8/merit-royal.jpg?w=900&h=-1&s=1" alt=""/>
         <div className="contentone">
         <span><p>Royal Room</p></span>
            <div className="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
                <div className="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <span>8 reviews</span>
                </div>
                <div className="price"> $150.00 <span>$210.00</span> </div>
                <a href="#" className="book-btn">BOOK NOW</a>
            </div>
         </div>
        </div>
        
      
     </div>

</section>




)
}
export default Content;