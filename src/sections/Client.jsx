import React from "react";
import "../styles/Clients.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Placeholder images, add your own to src/assets/
import client1 from "../assets/Testimonial_male.jpg";
import client2 from "../assets/Testimonial_female.jpeg";
import client3 from "../assets/Testimonial_male.jpg";

// Emoji stars for rating
const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);

const clients = [
  {
    name: "Rajesh Kumar",
    image: client1,
    profit: "Achieved 150% ROI",
    quote:
      "Abhijit's strategies helped me double my trading profits in just months.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    image: client2,
    profit: "Achieved 120% ROI",
    quote:
      "The personalized coaching and signals were spot-on and easy to follow.",
    rating: 4,
  },
  {
    name: "Michael Lee",
    image: client3,
    profit: "Achieved 200% ROI",
    quote:
      "Transparent, disciplined, and truly knowledgeable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Lee",
    image: client3,
    profit: "Achieved 200% ROI",
    quote:
      "Transparent, disciplined, and truly knowledgeable. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Lee",
    image: client3,
    profit: "Achieved 200% ROI",
    quote:
      "Transparent, disciplined, and truly knowledgeable. Highly recommended!",
    rating: 5,
  },
];

const Clients = () => (
  <section id="clients" className="clients-section">
    <h2 className="clients-header">Success Stories from Happy Clients</h2>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      breakpoints={{
        900: { slidesPerView: 2 },
        1320: { slidesPerView: 3 },
      }}
    >
      {clients.map((client, idx) => (
        <SwiperSlide key={idx}>
          <div className="client-card">
            <img
              src={client.image}
              className="client-image"
              alt={client.name}
            />
            <div className="client-name">{client.name}</div>
            <div className="client-profit">{client.profit}</div>
            <div className="client-quote">“{client.quote}”</div>
            <div className="star-rating">{stars(client.rating)}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Clients;
