import React from 'react'

export default function Course() {
  return (
    <section className="section course" id="courses" aria-label="course">
  <div className="container">
    <p className="section-subtitle">Courses</p>
    <h2 className="h2 section-title">Pick A Course To Get Started</h2>
    <ul className="grid-list">
      <li>
        <div className="course-card">
          <figure className="card-banner img-holder" style={{"--width":"370","--height":"220"}}>
            <img src="./assets/course-1.jpg" width={370} height={220} loading="lazy" alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
          </figure>
      
          <div className="card-content">
            <span className="badge">Beginner</span>
            <h3 className="h3">
              <a href="#" className="card-title">Build Responsive Real- World Websites with HTML and CSS</a>
            </h3>
            <div className="wrapper">
              <div className="rating-wrapper">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
              </div>
              <p className="rating-text">(3.5/5 Rating)</p>
            </div>
            <ul className="card-meta-list">
              <li className="card-meta-item">
                <ion-icon name="library-outline" aria-hidden="true" />
                <span className="span">8 Lessons</span>
              </li>
            </ul>
            <button
  className="btn has-before"
  onClick={() => (window.location.href = "/bargen1.html")}
>
  <span className="span">Trade</span>
  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
</button>

          </div>
        </div>
      </li>
      <li>
        <div className="course-card">
          <figure className="card-banner img-holder" style={{"--width":"370","--height":"220"}}>
            <img src="./assets/course-2.jpg" width={370} height={220} loading="lazy" alt="Java Programming Masterclass for Software Developers" className="img-cover" />
          </figure>
          
          <div className="card-content">
            <span className="badge">Advanced</span>
            <h3 className="h3">
              <a href="#" className="card-title">Java Programming Masterclass for Software Developers</a>
            </h3>
            <div className="wrapper">
              <div className="rating-wrapper">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
              </div>
              <p className="rating-text">(4.5 /5 Rating)</p>
            </div>
            <ul className="card-meta-list">
              <li className="card-meta-item">
                <ion-icon name="library-outline" aria-hidden="true" />
                <span className="span">15 Lessons</span>
              </li>
           
            </ul>
            <button
  className="btn has-before"
  onClick={() => (window.location.href = "/bargen2.html")}
>
  <span className="span">Trade</span>
  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
</button>
          </div>
        </div>
      </li>
      <li>
        <div className="course-card">
          <figure className="card-banner img-holder" style={{"--width":"370","--height":"220"}}>
            <img src="./assets/course-3.jpg" width={370} height={220} loading="lazy" alt="The Complete Camtasia Course for Content Creators" className="img-cover" />
          </figure>
       
          <div className="card-content">
            <span className="badge">Intermediate</span>
            <h3 className="h3">
              <a href="#" className="card-title">The Complete Camtasia Course for Content Creators</a>
            </h3>
            <div className="wrapper">
              <div className="rating-wrapper">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
              </div>
              <p className="rating-text">(4.9 /5 Rating)</p>
            </div>
            <ul className="card-meta-list">
              <li className="card-meta-item">
                <ion-icon name="library-outline" aria-hidden="true" />
                <span className="span">13 Lessons</span>
              </li>
           
            </ul>
            <button
  className="btn has-before"
  onClick={() => (window.location.href = "/bargen3.html")}
>
  <span className="span">Trade</span>
  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
</button>

          </div>
        </div>
      </li>

      
    
      <li>
        <div className="course-card">
          <figure className="card-banner img-holder" style={{"--width":"370","--height":"220"}}>
            <img src="./assets/Advanced.webp" width={370} height={220} loading="lazy" alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
          </figure>
          
      
          <div className="card-content">
            <span className="badge">Beginner</span>
            <h3 className="h3">
              <a href="#" className="card-title">Share your skills, learn from others, and grow together.</a>
            </h3>
            <div className="wrapper">
              <div className="rating-wrapper">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
              </div>
              <p className="rating-text">(3.7/5 Rating)</p>
            </div>
            <ul className="card-meta-list">
              <li className="card-meta-item">
                <ion-icon name="library-outline" aria-hidden="true" />
                <span className="span">4 Lessons</span>
              </li>
            </ul>
            <button
  className="btn has-before"
  onClick={() => (window.location.href = "/Advanced.html")}
>
  <span className="span">Trade</span>
  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
</button>

          </div>
        </div>
      </li>
      <li>
        <div className="course-card">
          <figure className="card-banner img-holder" style={{"--width":"370","--height":"220"}}>
            <img src="./assets/Advanced2.jpg" width={370} height={220} loading="lazy" alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
          </figure>
      
          <div className="card-content">
            <span className="badge">Advanced</span>
            <h3 className="h3">
              <a href="#" className="card-title">Exchange books or resources within your community.</a>
            </h3>
            <div className="wrapper">
              <div className="rating-wrapper">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
              </div>
              <p className="rating-text">(2.5/5 Rating)</p>
            </div>
            <ul className="card-meta-list">
              <li className="card-meta-item">
                <ion-icon name="library-outline" aria-hidden="true" />
                <span className="span">18 Lessons</span>
              </li>
            </ul>
            <button
  className="btn has-before"
  onClick={() => (window.location.href = "/Advanced2.html")}
>
  <span className="span">Trade</span>
  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
</button>

          </div>
        </div>
      </li>
      <li>
        <div className="course-card">
          <figure className="card-banner img-holder" style={{"--width":"370","--height":"220"}}>
            <img src="./assets/Advanced3.jpg" width={370} height={220} loading="lazy" alt="Build Responsive Real- World Websites with HTML and CSS" className="img-cover" />
          </figure>
      
          <div className="card-content">
            <span className="badge">Beginner</span>
            <h3 className="h3">
              <a href="#" className="card-title">Join forces to build something meaningful with shared skills</a>
            </h3>
            <div className="wrapper">
              <div className="rating-wrapper">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
              </div>
              <p className="rating-text">(4.1/5 Rating)</p>
            </div>
            <ul className="card-meta-list">
              <li className="card-meta-item">
                <ion-icon name="library-outline" aria-hidden="true" />
                <span className="span">9 Lessons</span>
              </li>
            </ul>
            <button
  className="btn has-before"
  onClick={() => (window.location.href = "/Advanced3.html")}
>
  <span className="span">Trade</span>
  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
</button>

          </div>
        </div>
      </li>
    </ul>
 
  </div>
</section>
  )
}
