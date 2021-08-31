import React from 'react';
import './model.css';

function Form({setOpenModal}) {
      return(
    
    <div className="container">
    <div className="content">
      <form action="#">
          <div className="titleclosebtn">
              <button  className="closebtn" onClick={() => {
                  setOpenModal(false);
              }}>
                  X
              </button>
          </div>
        <div className="title">
      <h4 style={{color:"#c5953c",textAlign:"center"}}>Enquiry Form</h4>
      <p className="txt">To book a room or to enquire about an existing booking please fill in our enquiry form and tell us what you require.</p>
        </div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name*</span>
            <input type="text" placeholder="Full Name" required/>
          </div>
          <div className="input-box">
            <span className="details">Email Address*</span>
            <input type="email"  placeholder="Email" required/>
          </div>
          <div className="input-box">
            <span className="details">Contact Number*</span>
            <input type="digits"  placeholder="Contact Number" required/>
          </div>
          <div className="input-box">
            <span className="details">Address*</span>
            <input type="text" placeholder="Street Address" required/>
          </div>
          <div className="input-box">
            <span className="details">City*</span>
            <input type="text"  placeholder="City"required/>
          </div>
          <div className="input-box">
            <span className="details">State*</span>
            <input type="text"  placeholder="State" required/>
          </div>
          <div className="input-box">
            <span className="details">Pin Code*</span>
            <input type="text"  placeholder="Pincode"required/>
          </div>
          <div className="input-box">
            <span className="details">Enter booking no.if enquiry is related to an existing booking</span>
            <input type="text" placeholder="...." />
          </div>
          <div className="input-box">
            <span className="details">Number of Rooms</span>
            <input type="number" placeholder="Enter" />
          </div>
          <div className="input-box">
            <span className="details">Number of Adults</span>
            <input type="number"  placeholder="Enter"/>
          </div>
          <div className="input-box">
            <span className="details">Number of Child</span>
            <input type="number"  placeholder="Enter" />
          </div>
          <div className="input-box">
            <span className="details">Age of Child</span>
            <input type="number" placeholder="Child 1 , Child 2 . . ." />
          </div>
          <div className="input-box">
            <span className="details">Check in</span>
            <input type="date" />
          </div>
          <div className="input-box">
            <span className="details">Check out</span>
            <input type="date" />
          </div>
        </div>
        <div className="button">
          <input type="submit" value="SUBMIT"/>
        </div>
            </form>
    </div>
  </div>
  

)}
export default Form;
