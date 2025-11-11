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
    name: "Ravindra Chavan",
    image: client1,
    profit: "Achieved 150% ROI",
    quote:
      "Before Sniper AI, I lost money because of emotional trades. Now, every move is backed by analysis. My portfolio looks healthier than ever.",
    rating: 5,
  },
  {
    name: "Priti Patil",
    image: client2,
    profit: "Achieved 120% ROI",
    quote:
      "I’m new to trading, but the team guided me really well. The setup was simple, and within a month I started seeing profits.",
    rating: 4,
  },
  {
    name: "Vishal Phadtare",
    image: client3,
    profit: "Achieved 200% ROI",
    quote:
      "I work full-time and can’t watch charts all day. The AI does everything automatically. I just check my results every evening — it’s that easy!",
    rating: 5,
  },
  {
    name: "Prajwal Singh",
    image: client3,
    profit: "Achieved 200% ROI",
    quote:
      "I don’t have much time to trade manually. This system does it all for me. Sniper AI is like having a pro trader by your side — 24/7!",
    rating: 5,
  },
  {
    name: "Nikhil Choudhary",
    image: client3,
    profit: "Achieved 200% ROI",
    quote:
      "This platform saves time and reduces stress. I don’t have to guess or panic anymore — everything is based on data.",
    rating: 5,
  },
];

const Clients = () => (
  <section id="clients" className="clients-section">
    <div className="client-heading">
      <h2 className="happy-clients-title">
        Success Stories from Happy Clients
        <span className="angled-underline">
          <span className="skew-bar"></span>
          <span className="circle-dot"></span>
        </span>
      </h2>
    </div>
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
