import React from 'react'

export default function About() {
  return (

<section className="section about" id="about" aria-label="about">
  <div className="container">
    <figure className="about-banner">
      <div className="img-holder" style={{"--width":"520","--height":"370"}}>
        <img src="./assets/about-banner.jpg" width={520} height={370} loading="lazy" alt="about banner" className="img-cover" />
      </div>
      <img src="./assets/about-shape-3.png" width={722} height={528} loading="lazy" alt className="shape about-shape-3" />
    </figure>
    <div className="about-content">
      <p className="section-subtitle">About Us</p>
      <h2 className="h2 section-title">
        <span className="span">Distant learning</span> for Skill Development
      </h2>
      <p className="section-text">
     CollegePortal: Building a Supportive Student Community

     Our college portal is designed to tackle the challenges students face in accessing resources and skills due to financial constraints. By introducing a hyperlocal barter system, we empower students to exchange resources, knowledge, and services within their campus community. This fosters collaboration, sustainability, and collective growth.
We believe in the power of resource-sharing, sustainability, and building a strong, supportive community. Join us to exchange, learn, and grow together—creating a thriving ecosystem where everyone benefits.

      </p>
      <ul className="about-list">
        <li className="about-item">
          <ion-icon name="checkmark-done-outline" aria-hidden="true" />
          <span className="span">Expert Trainers</span>
        </li>
        <li className="about-item">
          <ion-icon name="checkmark-done-outline" aria-hidden="true" />
          <span className="span">Online Remote Learning</span>
        </li>
        <li className="about-item">
          <ion-icon name="checkmark-done-outline" aria-hidden="true" />
          <span className="span">Lifetime Access</span>
        </li>
      </ul>
      <img src="./assets/about-shape-4.svg" width={100} height={100} loading="lazy" alt className="shape about-shape-4" />
    </div>
  </div>
</section>
)
}
