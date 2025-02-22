import React from "react";
import 'swiper/css'
import 'swiper/css/bundle'
const CardSlider = () => {
  const cards = [
    {
      id: 1,
      image: "bbbb.jpeg",
      title: "Drawing",
      description: "Learn or trade skills in sketching, shading, and creative illustration techniques.",
    },
    {
      id: 2,
      image: "ddgg.jpeg",
      title: "Graphic Design",
      description: "Master digital tools like Photoshop or Canva for creating stunning visual content.",
    },
    {
      id: 3,
      image: "programming-vector-icon.jpg",
      title: "Programming",
      description: "Explore coding languages, web development, or software building to enhance technical skills.",
    },
    {
      id: 4,
      image: "fffp.jpeg",
      title: "Photography",
      description: "Learn or share skills in capturing moments, editing, and mastering camera techniques.",
    },
    {
      id: 5,
      image: "sci health.jpeg",
      title: "Health Science",
      description: "Exchange knowledge in basic health practices, wellness, or medical sciences.",
    },
    {
      id: 6,
      image: "lang.jpg",
      title: "Language",
      description: "Develop or teach fluency in new languages, focusing on reading, writing, or conversation.",
    },
    {
      id: 7,
      image: "book.jpg",
      title: "Social Studies",
      description: "Dive into history, geography, and cultures by learning or sharing knowledge.",
    },
    {
      id: 8,
      image: "2 cook.jpeg",
      title: "Cooking",
      description: "Exchange recipes and techniques to master culinary skills and explore cuisines.",
    },
    {
      id: 9,
      image: "game.jpg",
      title: "Gaming",
      description: "Learn gaming strategies, techniques, or tips to level up your skills.",
    },
  ];

  return (
    <>
      <style>{`
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        section {
          position: relative;
          height: 500px;
          width: 1075px;
          display: flex;
          align-items: center;
        }

        .swiper-container {
          width: 950px;
        }

        .swiper-slide.custom-card {
          position: relative;
          background: beige;
          border: 3px solid orange;
          border-radius: 20px;
        }

        .custom-card-content {
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 30px;
        }

        .custom-card-icon {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 10px;
          border: 3px solid beige;
        }

        .custom-card-title {
          font-size: 20px;
          font-weight: 600;
          color: black;
          margin-top: 10px;
        }

        .custom-card-description {
          font-family: 'Oswald', sans-serif;
          font-size: small;
          color: black;
          text-align: center;
          margin: 10px 0;
        }

        .custom-card-buttons {
          display: flex;
          justify-content: space-around;
          width: 110%;
          margin-top: 20px;
        }

        .custom-card-buttons button {
          background: orange;
          border: none;
          outline: none;
          color: #000;
          font-weight: 600;
          padding: 8px 22px;
          border-radius: 20px;
          font-size: 14px;
          cursor: pointer;
          transition: 0.3s;
        }

        .custom-card-buttons button:hover {
          background: #fff;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: orange;
        }

        .swiper-pagination-bullet {
          height: 7px;
          width: 26px;
          background: orange;
          border-radius: 25px;
        }

        @media (max-width: 768px) {
          .swiper-container {
            width: 100%;
          }

          .custom-card-content {
            padding: 20px;
          }

          .custom-card-title {
            font-size: 18px;
          }

          .custom-card-description {
            font-size: 12px;
          }

          .custom-card-buttons button {
            padding: 6px 16px;
            font-size: 12px;
          }
        }
      `}</style>
      <section>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {cards.map((card) => (
              <div className="swiper-slide custom-card" key={card.id}>
                <div className="custom-card-content">
                  <img src={card.image} alt={card.title} className="custom-card-icon" />
                  <h3 className="custom-card-title">{card.title}</h3>
                  <p className="custom-card-description">{card.description}</p>
                  <div className="custom-card-buttons">
                    <button className="trade-btn">Trade</button>
                    <button className="learn-btn">Learn</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </section>
    </>
  );
};

export default CardSlider;
