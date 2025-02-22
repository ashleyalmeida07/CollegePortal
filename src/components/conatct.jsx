import React from 'react'

export default function Conatct() {

  
  return (
    <section className="contact" id="contact">
    <div className="container">
      <div className="contact-box">
        <div className="contact-info">
          <h3 className="title">Get in touch</h3>
          <p className="text">
            "Feel free to get in touch for project collaborations, internships, or
            to discuss exciting ideas. I'm always open to connecting and
            learning!"{" "}
          </p>
          <div className="information-wrap">
            <div className="information">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt" ></i>
              </div>
              <p className="info-text">Mumabi, India</p>
            </div>
            <div className="information">
              <div className="contact-icon">
                <i className="fas fa-paper-plane" ></i>
              </div>
              <p className="info-text">ashleyalmeida182006@gmail.com</p>
            </div>
            <div className="information">
              <div className="contact-icon">
                <i className="fas fa-phone-alt" ></i>
              </div>
              <p className="info-text">+91 9579025326</p>
            </div>
          </div>
        </div>

        <form className="contact-form" action="https://formsubmit.co/b05d1e0d7fb0fd34a83b562d2a98aff2" method="POST">
          <h3 className="title">Contact me</h3>
          <div className="row">
            <input
              type="text"
              name="name" required
              className="contact-input"
              placeholder="First Name"
            />
            <input
              type="text"
              name="name" required
              className="contact-input"
              placeholder="Last Name"
            />
          </div>
          <div className="row">
            <input type="text" name="text" required className="contact-input" placeholder="Phone" />
            <input type="email" name="email" required className="contact-input" placeholder="Email" />
          </div>
          <div className="row">
            <textarea
              name="msg"
              className="contact-input textarea"
              placeholder="Message"
              defaultValue={""}
            />
          </div>

          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_next" value="https://ashleyalmeida07.github.io/form/"/>
          <input type="hidden" name="_template" value="table"/>

  <div>
  <input 
    type="submit" 
    name="submit" 
    value="Send" 
    style={{
      all: 'unset', // Reset default styles
      display: 'inline-block', // Ensure block-level button layout
      padding: '0.85rem 2rem', // Padding for size
      backgroundColor: 'var(--main-color)', // Custom background color using CSS variable
      color: 'var(--light-one)', // Text color using CSS variable
      borderRadius: '2rem', // Rounded corners
      fontSize: '1.05rem', // Font size
      textTransform: 'uppercase', // Uppercase text
      fontWeight: 500, // Font weight
      transition: '0.3s', // Smooth transitions
      cursor: 'pointer', // Pointer cursor for better UX
      textAlign: 'center', // Center-align text
    }}
  />
</div>


        </form>
        
      </div>
    </div>
  </section>
  
  )
}
