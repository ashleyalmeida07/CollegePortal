import React from 'react'

export default function Type() {
  return (
<section className="section category"  id="type" aria-label="category">
  <div className="container">
    <p className="section-subtitle">Categories</p>
    <h2 className="h2 section-title">
      Online <span className="span">Classes</span> For Remote Learning.
    </h2>
    <p className="section-text">

    Learning from a distance    </p>
    <ul className="grid-list">
      <li>
        <div className="category-card" style={{"--color":"170, 75%, 41%"}}>
          <div className="card-icon">
            <img src="./assets/category-1.svg" width={40} height={40} loading="lazy" alt="Online Degree Programs" className="img" />
          </div>
          <h3 className="h3">
            <a href="#" className="card-title">Online Degree Programs</a>
          </h3>
          <p className="card-text">
            Lorem ipsum dolor consec tur elit adicing sed umod tempor.
          </p>
          <span className="card-badge">7 Courses</span>
        </div>
      </li>
      <li>
        <div className="category-card" style={{"--color":"351, 83%, 61%"}}>
          <div className="card-icon">
            <img src="./assets/category-2.svg" width={40} height={40} loading="lazy" alt="Non-Degree Programs" className="img" />
          </div>
          <h3 className="h3">
            <a href="#" className="card-title">Non-Degree Programs</a>
          </h3>
          <p className="card-text">
            Lorem ipsum dolor consec tur elit adicing sed umod tempor.
          </p>
          <span className="card-badge">4 Courses</span>
        </div>
      </li>
      <li>
        <div className="category-card" style={{"--color":"229, 75%, 58%"}}>
          <div className="card-icon">
            <img src="./assets/category-3.svg" width={40} height={40} loading="lazy" alt="Off-Campus Programs" className="img" />
          </div>
          <h3 className="h3">
            <a href="#" className="card-title">Off-Campus Programs</a>
          </h3>
          <p className="card-text">
            Lorem ipsum dolor consec tur elit adicing sed umod tempor.
          </p>
          <span className="card-badge">8 Courses</span>
        </div>
      </li>
      <li>
        <div className="category-card" style={{"--color":"42, 94%, 55%"}}>
          <div className="card-icon">
            <img src="./assets/category-4.svg" width={40} height={40} loading="lazy" alt="Hybrid Distance Programs" className="img" />
          </div>
          <h3 className="h3">
            <a href="#" className="card-title">Hybrid Distance Programs</a>
          </h3>
          <p className="card-text">
            Lorem ipsum dolor consec tur elit adicing sed umod tempor.
          </p>
          <span className="card-badge">8 Courses</span>
        </div>
      </li>
    </ul>
  </div>
</section>  )
}
